import React, { useState, useEffect } from 'react';
import { View, Pressable, Text } from 'react-native';
import InputText from '../../../Inputs/InputText';
import { createPoints } from '../../../../services/createPoints';
import { deletePoints } from '../../../../services/deletePoints';
import { patchPoints } from '../../../../services/patchPoints';
import {
  showToastError,
  showToastSuccess,
} from '../../../../services/showToasts';
import ConfirmMessage from '../ConfirmMessage';
import styles from './styles';

const ConfigPoint = (props) => {
  const data = props.data;
  const option = props.option;

  const initialPoint = {
    id: '',
    Nome: '',
    Atividade: '',
    Endereço: '',
    Contato: '',
    Latitude: '',
    Longitude: '',
  };

  const [point, setPoint] = useState(data ? { ...data } : { ...initialPoint });

  useEffect(() => {
    setPoint({ ...data });
  }, [data]);

  const [searching, setSearching] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const crudOperation = async () => {
      switch (option) {
        case 'Criar':
          try {
            point.id = Date.now();
            await createPoints(point);
            showToastSuccess('Ponto de interesse criado com sucesso.');
            setModalVisible(false);
          } catch (e) {
            showToastError('Não foi possível criar ponto de interesse.');
            setModalVisible(false);
          }
          break;
        case 'Editar':
          try {
            await patchPoints(point);
            showToastSuccess('Ponto de interesse editado com sucesso.');
            setModalVisible(false);
          } catch (e) {
            showToastError('Não foi possível editar ponto de interesse.');
            setModalVisible(false);
          }
          break;
        case 'Apagar':
          try {
            await deletePoints(point);
            showToastSuccess('Ponto de interesse apagado com sucesso.');
            setModalVisible(false);
          } catch (e) {
            showToastError('Não foi possível apagar ponto de interesse.');
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
        onChangeText={(text) => setPoint({ ...point, Nome: text })}
      />
      <InputText
        placeholder="Atividade"
        defaultValue={data?.Atividade}
        onChangeText={(text) => setPoint({ ...point, Atividade: text })}
      />
      <InputText
        placeholder="Endereço"
        defaultValue={data?.Endereço}
        onChangeText={(text) => setPoint({ ...point, Endereço: text })}
      />
      <InputText
        placeholder="Contato"
        defaultValue={data?.Contato}
        onChangeText={(text) => setPoint({ ...point, Contato: text })}
      />
      <InputText
        placeholder="Latitude"
        defaultValue={data?.Latitude}
        onChangeText={(text) => setPoint({ ...point, Latitude: text })}
      />
      <InputText
        placeholder="Longitude"
        defaultValue={data?.Longitude}
        onChangeText={(text) => setPoint({ ...point, Longitude: text })}
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

export default ConfigPoint;
