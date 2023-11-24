import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { removeJourney } from '../../../../redux/slices/journeysSlice';
import { useSelector } from 'react-redux';
import { showToastError } from '../../../../services/showToasts';

// https://oblador.github.io/react-native-vector-icons/

const RemoveButton = () => {
  const journeys = useSelector(state => state.journeys);
  const removeError = "O itinerário está vazio.";

  const dispatch = useDispatch();

  const removeCompanyOrPoint = () => {
    if (journeys.length > 0) {
      dispatch(removeJourney());
    } else {
      showToastError(removeError);
    }
  }

    return (
        <Pressable style={styles.button} onPress={removeCompanyOrPoint}>
        <Icon
          name='map-marker-minus'
          size={28}
          style={styles.icon}
        />
      </Pressable>
    )
}

export default RemoveButton;