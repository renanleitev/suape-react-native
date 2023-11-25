import React, { useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useEmailValidation } from '../../../hooks/use-forms-validation';
import { usePasswordValidation } from '../../../hooks/use-forms-validation';
import { showToastSuccess, showToastError } from '../../../services/showToasts';
import InputText from '../../Inputs/InputText';
import { patchForgetPassword } from '../../../services/patchForgetPassword';
import styles from './styles';

const ForgotPassword = ({ navigation }) => {
  const [user, setUser] = useState({
    Email: '',
    Password: '',
    RepeatPassword: '',
  });

  const redefineSucess = 'Senha redefinida com sucesso.';
  const redefineError = 'Não foi possível redefinir a senha.';

  const onRedefinePassword = async () => {
    const isEmailValid = useEmailValidation(user.Email);
    const isPasswordValid = usePasswordValidation(
      user.Password,
      user.RepeatPassword
    );
    if (isEmailValid && isPasswordValid) {
      try {
        await patchForgetPassword(user);
        showToastSuccess(redefineSucess);
        navigation.navigate('Login/Logout');
      } catch (e) {
        showToastError(redefineError);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Redefinir senha</Text>
      <ScrollView>
        <InputText
          placeholder="Email"
          onChangeText={(text) => setUser({ ...user, Email: text })}
        />
        <InputText
          placeholder="Nova Senha"
          secureTextEntry={true}
          onChangeText={(text) => setUser({ ...user, Password: text })}
        />
        <InputText
          placeholder="Repetir senha"
          secureTextEntry={true}
          onChangeText={(text) => setUser({ ...user, RepeatPassword: text })}
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
