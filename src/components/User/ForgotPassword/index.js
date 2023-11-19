import React, { useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useEmailValidation } from '../../../hooks/use-forms-validation';
import { usePasswordValidation } from '../../../hooks/use-forms-validation';
import { showToastSuccess } from '../../../services/showToasts';
import InputText from '../../Inputs/InputText';
import { patchUser } from '../../../services/patchUser';
import styles from './styles';

const ForgotPassword = ({ navigation }) => {
  const [user, setUser] = useState({
    Email: '',
    Password: '',
    RepeatPassword: '',
  });

  const onRedefinePassword = async () => {
    const isEmailValid = useEmailValidation(user.email);
    const isPasswordValid = usePasswordValidation(
      user.Password,
      user.RepeatPassword
    );
    if (isEmailValid && isPasswordValid) {
      await patchUser(user);
      showToastSuccess('Senha redefinida com sucesso. Por favor, faça o login');
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
