import { useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import CloseButton from '../../../../Buttons/CloseButton';
import { showToastSuccess } from '../../../../../services/showToasts';
import { useDispatch } from 'react-redux';
import { emptyJourneys } from '../../../../../redux/slices/journeysSlice';
import { emptyCoordinates } from '../../../../../redux/slices/coordinatesSlice';
import styles from './styles';

const ClearJourneyMessage = (props) => {
  const setModalVisible = props.setModalVisible;
  const clearJourneySuccess = "Itinerario apagado com sucesso.";
  const clearJourneyWarning = "Apagar itinerário? Essa ação é irreversível.";
  const dispatch = useDispatch();

  const clearJourney = useCallback(() => {
    showToastSuccess(clearJourneySuccess);
    setModalVisible(false);
    dispatch(emptyJourneys());
    dispatch(emptyCoordinates());
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

export default ClearJourneyMessage;
