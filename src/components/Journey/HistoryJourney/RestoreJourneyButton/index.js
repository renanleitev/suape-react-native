import { Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  showToastSuccess,
  showToastError,
} from '../../../../services/showToasts';
import { addJourney, emptyJourneys } from '../../../../redux/slices/journeysSlice';
import styles from './styles';

const RestoreJourneyButton = () => {
  const users = useSelector((state) => state.users) || [];
  const user = users[0];
  const journeys = user?.Journey;

  const dispatch = useDispatch();

  const restoreJourneySuccess = 'Itinerário restaurado com sucesso';
  const emptyJourneyError = 'Histórico de itinerário está vazio';

  const saveJourney = async () => {
    if (journeys) {
      showToastSuccess(restoreJourneySuccess);
      dispatch(emptyJourneys());
      journeys.forEach((journey) => dispatch(addJourney(journey)));
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
