import { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Modal, Pressable, Text } from 'react-native';
import NextButton from '../../Buttons/NextButton';
import PreviousButton from '../../Buttons/PreviousButton';
import styles from './styles';

const InfoCompany = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;
  const storedCompanies = useSelector((state) => state.companies) || [];
  const emptyMessage = 'Nenhuma informação disponível.';
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          style={styles.centeredView}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Pressable
            style={styles.modalView}
            onPress={() => setModalVisible(true)}
          >
            <View style={styles.headerTitle}>
              <Text style={styles.headerTitleText}>Informação</Text>
            </View>
            <View style={styles.infoCompany}>
              <PreviousButton index={index} setIndex={setIndex} />
              {storedCompanies[index] ? (
                <>
                  <Text style={styles.itemText}>
                    {storedCompanies[index]?.Nome}
                  </Text>
                  <Text style={styles.itemText}>
                    {storedCompanies[index]?.Atividade}
                  </Text>
                  <Text style={styles.itemText}>
                    {storedCompanies[index]?.Endereço}
                  </Text>
                  <Text style={styles.itemText}>
                    {storedCompanies[index]?.Contato}
                  </Text>
                </>
              ) : (
                <Text style={styles.itemText}>{emptyMessage}</Text>
              )}
              <NextButton index={index} setIndex={setIndex} />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default InfoCompany;
