import React, { useState, useCallback } from 'react';
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useEmailValidation } from '../../../hooks/use-forms-validation';
import { usePasswordValidation } from '../../../hooks/use-forms-validation';
import { showToastError, showToastSuccess } from '../../../services/showToasts';
import InputText from '../../Inputs/InputText';
import { useDispatch } from 'react-redux';
import { postUser } from '../../../services/postUser';
import { login } from '../../../redux/slices/usersSlice';
import setAdmin from '../../../services/setAdmin';
import styles from './styles';

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    id: Date.now(),
    Name: '',
    Username: '',
    Email: '',
    Password: '',
    RepeatPassword: '',
    Role: 'USER',
    Journey: [],
  });
  const signUpSucesss = 'Cadastro bem sucedido. Redirecionando...';
  const signUpError = 'Erro durante o cadastro. Por favor, tente novamente';

  const dispatch = useDispatch();

  const onPressSignUp = useCallback(async () => {
    const isEmailValid = useEmailValidation(user.Email);
    const isPasswordValid = usePasswordValidation(
      user.Password,
      user.RepeatPassword
    );
    if (isEmailValid && isPasswordValid) {
      const finalUser = setAdmin(user);
      const response = await postUser(finalUser);
      try {
        showToastSuccess(signUpSucesss);
        dispatch(login(response));
        navigation.navigate('Mapa');
      } catch (e) {
        showToastError(signUpError);
      }
    }
  });
  const onPressLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>
      <ScrollView>
        <InputText
          placeholder="Nome"
          onChangeText={(text) => setUser({ ...user, Name: text })}
        />
        <InputText
          placeholder="Username"
          onChangeText={(text) => setUser({ ...user, Username: text })}
        />
        <InputText
          placeholder="Email"
          onChangeText={(text) => setUser({ ...user, Email: text })}
        />
        <InputText
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setUser({ ...user, Password: text })}
        />
        <InputText
          placeholder="Repetir senha"
          secureTextEntry={true}
          onChangeText={(text) => setUser({ ...user, RepeatPassword: text })}
        />
        <TouchableOpacity onPress={onPressSignUp} style={styles.signUpBtn}>
          <Text style={styles.text}>CADASTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogin}>
          <Text style={styles.text}>Já tem uma conta? Faça o login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
