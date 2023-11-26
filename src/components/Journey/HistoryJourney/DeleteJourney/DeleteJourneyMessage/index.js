import { useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import CloseButton from '../../../../Buttons/CloseButton';
import { showToastSuccess } from '../../../../../services/showToasts';
import { patchSaveJourney } from '../../../../../services/patchSaveJourney';
import { useSelector } from 'react-redux';
import styles from './styles';

const DeleteJourneyMessage = (props) => {
  const setModalVisible = props.setModalVisible;
  const users = useSelector(state => state.users);
  const user = users[0];
  const clearJourneyWarning = "Apagar histórico de itinerário? Essa ação é irreversível.";

  const clearJourney = useCallback(async () => {
    await patchSaveJourney({...user, Journey: []});
    setModalVisible(false);
  }, []);

  return (
    <>
      <Text style={styles.clearMessage}>{clearJourneyWarning}</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.buttonClear]}
          onPress={clearJourney}
        >
          <Text style={styles.textStyle}>Apagar</Text>
        </Pressable>
        <CloseButton setModalVisible={setModalVisible} text={"Voltar"}/>
      </View>
    </>
  );
};

export default DeleteJourneyMessage;
