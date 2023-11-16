import { useCallback } from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import CloseButton from '../../../Buttons/CloseButton';
import ListJourney from '../../ListJourney';
import styles from './styles';

const ClearJourneyMessage = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;

  const clearJourney = useCallback(() => {
    dispatch(emptyJourneys());
  }, []);

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
              <Text style={styles.headerTitleText}>Apagar Itinerario</Text>
            </View>
            <ListJourney />
            <Text>Apagar itinerário? Essa ação é irreversível.</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonClear]}
                onPress={clearJourney}
              >
                <Text style={styles.textStyle}>Apagar</Text>
              </Pressable>
              <CloseButton setModalVisible={setModalVisible} />
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default ClearJourneyMessage;
