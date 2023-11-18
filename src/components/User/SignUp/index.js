import React, { useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useEmailValidation } from '../../../hooks/use-forms-validation';
import { usePasswordValidation } from '../../../hooks/use-forms-validation';
import { showToastSuccess } from '../../../services/showToasts';
import InputText from '../../Inputs/InputText';
import styles from './styles';

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onPressSignUp = () => {
    const isEmailValid = useEmailValidation(user.email);
    const isPasswordValid = usePasswordValidation(
      user.password,
      user.repeatPassword
    );
    if (isEmailValid && isPasswordValid) {
      showToastSuccess('Autenticação bem sucedida');
      navigation.navigate('Mapa');
    }
  };
  const onPressLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>
      <ScrollView>
        <InputText
          placeholder="Nome"
          onChangeText={(text) => setUser({ ...user, name: text })}
        />
        <InputText
          placeholder="Username"
          onChangeText={(text) => setUser({ ...user, username: text })}
        />
        <InputText
          placeholder="Email"
          onChangeText={(text) => setUser({ ...user, email: text })}
        />
        <InputText
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setUser({ ...user, password: text })}
        />
        <InputText
          placeholder="Repetir senha"
          secureTextEntry={true}
          onChangeText={(text) => setUser({ ...user, repeatPassword: text })}
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
