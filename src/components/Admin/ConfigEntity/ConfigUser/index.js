import React, { useEffect, useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import InputText from '../../../Inputs/InputText';
import { postUser } from '../../../../services/postUser';
import { patchUser } from '../../../../services/patchUser';
import { deleteUser } from '../../../../services/deleteUser';
import {
  showToastError,
  showToastSuccess,
} from '../../../../services/showToasts';
import ConfirmMessage from '../ConfirmMessage';
import styles from './styles';

const ConfigUser = (props) => {
  const data = props.data;
  const option = props.option;
  const length = props.length;

  const initialUser = {
    id: '',
    Name: '',
    Username: '',
    Email: '',
    Role: '',
  };

  const [user, setUser] = useState(data ? { ...data } : { ...initialUser });

  useEffect(() => {
    setUser({ ...data });
  }, [data]);

  const [searching, setSearching] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const crudOperation = async () => {
      switch (option) {
        case 'Criar':
          try {
            if (length > 0) {
              user.id = Date.now();
              await postUser(user);
              showToastSuccess('Usuário criado com sucesso.');
              setModalVisible(false);
            } else {
              showToastError('Não foi possível criar usuário.');
              setModalVisible(false);
            }
          } catch (e) {
            showToastError('Não foi possível criar usuário.');
            setModalVisible(false);
          }
          break;
        case 'Editar':
          try {
            await patchUser(user);
            showToastSuccess('Usuário editado com sucesso.');
            setModalVisible(false);
          } catch (e) {
            showToastError('Não foi possível editar usuário.');
            setModalVisible(false);
          }
          break;
        case 'Apagar':
          try {
            await deleteUser(user);
            showToastSuccess('Usuário apagado com sucesso.');
            setModalVisible(false);
          } catch (e) {
            showToastError('Não foi possível apagar usuário.');
            setModalVisible(false);
          }
          break;
        default:
          showToastError('Escolha uma opção de requisição válida.');
          setModalVisible(false);
          break;
      }
    };
    if (searching) {
      crudOperation();
      setSearching(false);
    }
  }, [option, searching]);

  return (
    <View style={styles.container}>
      <InputText
        placeholder="Nome"
        defaultValue={data?.Name}
        onChangeText={(text) => setCompany({ ...user, Name: text })}
      />
      <InputText
        placeholder="Nome de usuário"
        defaultValue={data?.Username}
        onChangeText={(text) => setCompany({ ...user, Username: text })}
      />
      <InputText
        placeholder="Email (e.g. user@email.com)"
        defaultValue={data?.Email}
        onChangeText={(text) => setCompany({ ...user, Email: text })}
      />
      <InputText
        placeholder="Role"
        defaultValue={data?.Role}
        onChangeText={(text) => setCompany({ ...user, Role: text })}
      />
      <Pressable
        style={styles.saveBtn}
        onPress={() => setModalVisible(true)}
        disabled={length <= 0}
      >
        <Text style={styles.text}>Salvar</Text>
      </Pressable>
      <ConfirmMessage
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setSearching={setSearching}
      />
    </View>
  );
};

export default ConfigUser;
