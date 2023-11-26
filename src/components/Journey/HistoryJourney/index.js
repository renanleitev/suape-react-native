import { useState } from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import styles from './styles';
import DeleteJourneyButton from './DeleteJourney/DeleteJourneyButton';
import DeleteJourneyMessage from './DeleteJourney/DeleteJourneyMessage';
import PreviousJourney from './PreviousJourney';
import RestoreJourneyButton from './RestoreJourneyButton';

const HistoryJourney = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;

  const [openClearJourney, setOpenClearJourney] = useState(false);
  const [journey, setJourney] = useState([]);

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
              <Text style={styles.headerTitleText}>Histórico de Itinerário</Text>
            </View>
            {openClearJourney ? (
              <DeleteJourneyMessage setModalVisible={setOpenClearJourney} />
            ) : (
              <>
                <PreviousJourney journey={journey} setJourney={setJourney} modalVisible={modalVisible}/>
                <View style={styles.buttonContainer}>
                  <RestoreJourneyButton journey={journey} setModalVisible={setModalVisible}/>
                  <DeleteJourneyButton setModalVisible={setOpenClearJourney} />
                </View>
              </>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default HistoryJourney;
