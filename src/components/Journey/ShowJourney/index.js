import {
  View,
  Text,
  Pressable,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

const ShowJourney = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;
  const journeys = props.journeys || [];
  const emptyJourneyMessage = 'Nenhum itinerário disponível.';

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
            <FlatList
              data={journeys}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={() => {}}>
                  <Text style={styles.itemText}>{item.Nome}</Text>
                </TouchableWithoutFeedback>
              )}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              ListEmptyComponent={
                <Text style={styles.itemText}>{emptyJourneyMessage}</Text>
              }
              style={styles.flatList}
            />
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

export default ShowJourney;
