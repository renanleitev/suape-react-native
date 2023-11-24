import { View, Modal, Pressable, Text } from 'react-native';
import CloseButton from '../../../Buttons/CloseButton';
import styles from './styles';

const ConfirmMessage = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;
  const setSearching = props.setSearching;

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
              <Text style={styles.headerTitleText}>Confirmar Operação?</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.saveBtn}
                onPress={() => setSearching(true)}
              >
                <Text style={styles.text}>SIM</Text>
              </Pressable>
              <CloseButton setModalVisible={setModalVisible} text={"NÃO"}/>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default ConfirmMessage;
