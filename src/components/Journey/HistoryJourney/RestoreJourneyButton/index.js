import { Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  showToastSuccess,
  showToastError,
} from '../../../../services/showToasts';
import { addJourney, emptyJourneys } from '../../../../redux/slices/journeysSlice';
import { addCoordinate, emptyCoordinates } from '../../../../redux/slices/coordinatesSlice';
import styles from './styles';

const RestoreJourneyButton = (props) => {
  const journey = props.journey;
  const setModalVisible = props.setModalVisible;

  const dispatch = useDispatch();

  const restoreJourneySuccess = 'Itinerário restaurado com sucesso';
  const emptyJourneyError = 'Histórico de itinerário está vazio';

  const saveJourney = async () => {
    if (journey) {
      showToastSuccess(restoreJourneySuccess);
      dispatch(emptyJourneys());
      dispatch(emptyCoordinates());
      journey.forEach((journey) => dispatch(addJourney(journey)));
      journey.forEach((journey) => dispatch(addCoordinate(journey)));
      setModalVisible(false);
    } else {
      showToastError(emptyJourneyError);
    }
  };

  return (
    <Pressable
      style={[styles.button, styles.buttonRestore]}
      onPress={saveJourney}
    >
      <Text style={styles.textStyle}>Restaurar</Text>
    </Pressable>
  );
};

export default RestoreJourneyButton;
