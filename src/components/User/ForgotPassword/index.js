import React, { useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useEmailValidation } from '../../../hooks/use-forms-validation';
import { usePasswordValidation } from '../../../hooks/use-forms-validation';
import { showToastSuccess } from '../../../services/showToasts';
import InputText from '../../Inputs/InputText';
import styles from './styles';

const ForgotPassword = ({ navigation }) => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onRedefinePassword = () => {
    const isEmailValid = useEmailValidation(user.email);
    const isPasswordValid = usePasswordValidation(
      user.password,
      user.repeatPassword
    );
    if (isEmailValid && isPasswordValid) {
      showToastSuccess('Senha redefinida com sucesso.');
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Redefinir senha</Text>
      <ScrollView>
        <InputText
          placeholder="Email"
          onChangeText={(text) => setUser({ ...user, email: text })}
        />
        <InputText
          placeholder="Nova Senha"
          secureTextEntry={true}
          onChangeText={(text) => setUser({ ...user, password: text })}
        />
        <InputText
          placeholder="Repetir senha"
          secureTextEntry={true}
          onChangeText={(text) => setUser({ ...user, repeatPassword: text })}
        />
        <TouchableOpacity
          onPress={onRedefinePassword}
          style={styles.forgotPasswordBtn}
        >
          <Text style={styles.text}>REDEFINIR SENHA</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
