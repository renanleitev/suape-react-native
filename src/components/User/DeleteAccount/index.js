import React, {useState} from 'react';
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ConfirmDelete from '../ConfirmDelete';
import JourneyButton from '../../Buttons/JourneyButton';
import ReturnButton from '../../Buttons/ReturnButton';
import styles from './styles';

const DeleteAccount = ({ navigation }) => {
  const users = useSelector(state => state.users) || [];
  const user = users[0];
  const [modalVisible, setModalVisible] = useState(false);

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
        <JourneyButton/>
        <ReturnButton navigation={navigation}/>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.deleteBtn}>
          <Text style={styles.text}>APAGAR CONTA</Text>
        </TouchableOpacity>
        <ConfirmDelete
          navigation={navigation}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeleteAccount;
