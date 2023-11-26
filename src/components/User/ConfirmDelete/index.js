import { View, Text, Pressable, Modal } from 'react-native';
import { showToastSuccess } from '../../../services/showToasts';
import CloseButton from '../../Buttons/CloseButton';
import { logout } from '../../../redux/slices/usersSlice';
import { useDispatch } from 'react-redux';
import { MapaPage } from '../../../constants';
import styles from './styles';

const ConfirmDelete = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;
  const navigation = props.navigation;
  const deleteAccountSuccess = 'Conta apagada com sucesso. Redirecionando...';
  const deleteAccountWarning = 'Apagar conta? Essa ação é irreversível.';

  const dispatch = useDispatch();

  const onDeleteAccount = () => {
    showToastSuccess(deleteAccountSuccess);
    dispatch(logout());
    navigation.navigate(MapaPage);
  };

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
              <Text style={styles.headerTitleText}>Apagar Conta</Text>
            </View>
            <Text style={styles.clearMessage}>{deleteAccountWarning}</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonClear]}
                onPress={onDeleteAccount}
              >
                <Text style={styles.textStyle}>Apagar</Text>
              </Pressable>
              <CloseButton setModalVisible={setModalVisible} text={'Voltar'} />
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default ConfirmDelete;
