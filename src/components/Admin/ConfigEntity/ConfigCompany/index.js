import React, { useEffect, useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import InputText from '../../../Inputs/InputText';
import { createCompanies } from '../../../../services/createCompanies';
import { deleteCompanies } from '../../../../services/deleteCompanies';
import { patchCompanies } from '../../../../services/patchCompanies';
import {
  showToastError,
  showToastSuccess,
} from '../../../../services/showToasts';
import ConfirmMessage from '../ConfirmMessage';
import styles from './styles';

const ConfigCompany = (props) => {
  const data = props.data;
  const option = props.option;

  const initialCompany = {
    id: '',
    Nome: '',
    Atividade: '',
    Município: '',
    Polo: '',
    Endereço: '',
    Contato: '',
    Latitude: '',
    Longitude: '',
  };

  const [company, setCompany] = useState(
    data ? { ...data } : { ...initialCompany }
  );

  useEffect(() => {
    setCompany({ ...data });
  }, [data]);

  const [searching, setSearching] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const crudOperation = async () => {
      switch (option) {
        case 'Criar':
          try {
              company.id = Date.now();
              await createCompanies(company);
              showToastSuccess('Empresa criada com sucesso.');
              setModalVisible(false);
          } catch (e) {
            showToastError('Não foi possível criar empresa.');
            setModalVisible(false);
          }
          break;
        case 'Editar':
          try {
            await patchCompanies(company);
            showToastSuccess('Empresa editada com sucesso.');
            setModalVisible(false);
          } catch (e) {
            showToastError('Não foi possível editar empresa.');
            setModalVisible(false);
          }
          break;
        case 'Apagar':
          try {
            await deleteCompanies(company);
            showToastSuccess('Empresa apagada com sucesso.');
            setModalVisible(false);
          } catch (e) {
            showToastError('Não foi possível apagar empresa.');
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
          defaultValue={data?.Nome}
          onChangeText={(text) => setCompany({ ...company, Nome: text })}
        />
        <InputText
          placeholder="Atividade"
          defaultValue={data?.Atividade}
          onChangeText={(text) => setCompany({ ...company, Atividade: text })}
        />
        <InputText
          placeholder="Município"
          defaultValue={data?.Município}
          onChangeText={(text) => setCompany({ ...company, Município: text })}
        />
        <InputText
          placeholder="Polo"
          defaultValue={data?.Polo}
          onChangeText={(text) => setCompany({ ...company, Polo: text })}
        />
        <InputText
          placeholder="Endereço"
          defaultValue={data?.Endereço}
          onChangeText={(text) => setCompany({ ...company, Endereço: text })}
        />
        <InputText
          placeholder="Contato"
          defaultValue={data?.Contato}
          onChangeText={(text) => setCompany({ ...company, Contato: text })}
        />
        <InputText
          placeholder="Latitude"
          defaultValue={data?.Latitude}
          onChangeText={(text) => setCompany({ ...company, Latitude: text })}
        />
        <InputText
          placeholder="Longitude"
          defaultValue={data?.Longitude}
          onChangeText={(text) => setCompany({ ...company, Longitude: text })}
        />
        <Pressable
          style={styles.saveBtn}
          onPress={() => setModalVisible(true)}
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

export default ConfigCompany;
