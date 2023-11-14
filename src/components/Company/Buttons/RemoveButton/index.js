import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { removeJourney } from '../../../../redux/slices/journeysSlice';

// https://oblador.github.io/react-native-vector-icons/

const RemoveButton = () => {

  const dispatch = useDispatch();

  const removeCompanyOrPoint = () => {
    dispatch(removeJourney());
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