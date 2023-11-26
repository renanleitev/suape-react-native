import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { logout } from '../../../redux/slices/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { showToastSuccess } from '../../../services/showToasts';
import { MapaPage } from '../../../constants';
import styles from './styles';

const Logout = ({ navigation }) => {
  const users = useSelector(state => state.users) || [];
  const user = users[0];
  const dispatch = useDispatch();
  const logoutSuccess = "Logout realizado com sucesso. Redirecionando...";

  const onLogout= () => {
    dispatch(logout());
    showToastSuccess(logoutSuccess);
    navigation.navigate(MapaPage);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <ScrollView>
        <Text style={styles.text}>
            Nome: {user && user.Name}
        </Text>
        <Text style={styles.text}>
            Nome de usuário: {user && user.Username}
        </Text>
        <Text style={styles.text}>
            Email: {user && user.Email}
        </Text>
        <Text style={styles.text}>
            Papel: {user && user.Role}
        </Text>
        <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
          <Text style={styles.text}>LOGOUT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Logout;
