import { Pressable } from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { emptyJourneys } from '../../../redux/slices/journeysSlice';

// https://oblador.github.io/react-native-vector-icons/

const EmptyJourneyButton = () => {

  const dispatch = useDispatch();

  const removeJourney = () => {
    dispatch(emptyJourneys());
  }

    return (
        <Pressable style={styles.button} onPress={removeJourney}>
        <Text>Apagar</Text>
      </Pressable>
    )
}

export default EmptyJourneyButton;