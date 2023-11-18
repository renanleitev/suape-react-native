import React, { useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import InputText from '../../Inputs/InputText';
import styles from './styles';

const Login = ({ navigation }) => {
  const onPressLogin = () => {
    // Do something about login operation
  };
  const onPressForgotPassword = () => {
    navigation.navigate('Redefinir senha');
  };
  const onPressSignUp = () => {
    navigation.navigate('Cadastrar');
  };
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <ScrollView>
        <InputText
          placeholder="Email"
          onChangeText={(text) => setUser({ ...user, email: text })}
        />
        <InputText
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setUser({ ...user, password: text })}
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
