import { useState } from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import styles from './styles';
import ClearJourneyButton from '../ClearJourney/ClearJourneyButton';
import CloseButton from '../../Buttons/CloseButton';
import ListJourney from '../ListJourney';
import ClearJourneyMessage from '../ClearJourney/ClearJourneyMessage';

const ShowJourney = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;

  const [openClearJourney, setOpenClearJourney] = useState(false);

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
              <Text style={styles.headerTitleText}>Itinerário</Text>
            </View>
            {openClearJourney ? (
              <ClearJourneyMessage setModalVisible={setOpenClearJourney} />
            ) : (
              <>
                <ListJourney />
                <View style={styles.buttonContainer}>
                  <ClearJourneyButton setModalVisible={setOpenClearJourney} />
                  <CloseButton setModalVisible={setModalVisible} />
                </View>
              </>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default ShowJourney;
