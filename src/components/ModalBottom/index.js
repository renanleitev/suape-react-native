import { View, TouchableOpacity, Modal } from 'react-native';
import { useKeyboardVisible } from '../../hooks/use-keyboard';
import styles from './styles';

const ModalBottom = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;
  const children = props.children;
  const keyboardVisible = useKeyboardVisible();

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}
        >
          <TouchableOpacity
            style={[styles.modal, keyboardVisible && styles.keyboardVisible]}
            activeOpacity={1}
          >
            {children}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ModalBottom;
