import { Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  showToastSuccess,
  showToastError,
} from '../../../../services/showToasts';
import { addJourney, emptyJourneys } from '../../../../redux/slices/journeysSlice';
import styles from './styles';

const RestoreJourneyButton = (props) => {
  const journey = props.journey;

  const dispatch = useDispatch();

  const restoreJourneySuccess = 'Itinerário restaurado com sucesso';
  const emptyJourneyError = 'Histórico de itinerário está vazio';

  const saveJourney = async () => {
    if (journey) {
      showToastSuccess(restoreJourneySuccess);
      dispatch(emptyJourneys());
      journey.forEach((journey) => dispatch(addJourney(journey)));
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
