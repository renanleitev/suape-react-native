import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ModalBottom = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View
        style={{
          height: '50%',
          marginTop: 'auto',
          backgroundColor: 'blue',
        }}
      >
        <View style={styles.footer}>
          <Text style={styles.headerText}>Pesquisar Empresas</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.addButtonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalBottom;
