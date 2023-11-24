import React, { useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import InputText from '../../Inputs/InputText';
import { loginUser } from '../../../services/loginUser';
import { showToastSuccess, showToastError } from '../../../services/showToasts';
import { login } from '../../../redux/slices/usersSlice';
import { useDispatch } from 'react-redux';
import styles from './styles';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    Email: '',
    Password: '',
  });
  const loginSuccess = "Usuário autenticado com sucesso. Redirecionando...";
  const loginError = "Email e/ou senha incorreto(s)";
  const onPressLogin = async () => {
    const response = await loginUser(user);
    try {
      if (response.Email === user.Email && response.Password === user.Password) {
        navigation.navigate('Mapa');
        showToastSuccess(loginSuccess);
        dispatch(login(response));
      } else {
        showToastError(loginError);
      }
    } catch (e) {
      showToastError(loginError);
    }
  };
  const onPressForgotPassword = () => {
    navigation.navigate('Redefinir senha');
  };
  const onPressSignUp = () => {
    navigation.navigate('Cadastrar/Apagar conta');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <ScrollView>
        <InputText
          placeholder="Email"
          onChangeText={(text) => setUser({ ...user, Email: text })}
        />
        <InputText
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setUser({ ...user, Password: text })}
        />
        <TouchableOpacity onPress={onPressForgotPassword}>
          <Text style={styles.text}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressSignUp}>
          <Text style={styles.text}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
