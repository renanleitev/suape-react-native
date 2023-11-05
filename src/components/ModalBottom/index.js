import { View, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';

const ModalBottom = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;
  const children = props.children;

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalContainer} onPress={() => setModalVisible(false)}>
          <TouchableOpacity style={styles.modal} activeOpacity={1}>
            {children}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ModalBottom;
