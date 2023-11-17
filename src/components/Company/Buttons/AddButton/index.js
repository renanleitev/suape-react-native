import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { addJourney } from '../../../../redux/slices/journeysSlice';
import { showToastSuccess, showToastError } from '../../../../services/showToasts';

// https://oblador.github.io/react-native-vector-icons/

const AddButton = (props) => {
  const place = props.place;
  const type = props.type;
  const data = props.data;
  const addSuccess = `${type} adicionado(a) com sucesso.`;
  const addError = "Não foi possível adicionar.";

  const dispatch = useDispatch();

  const addPlace = () => {
      if (place) {
        const placeFound = data.find(p => p.Nome === place);
        dispatch(addJourney(placeFound));
        showToastSuccess(addSuccess);
      } else {
        showToastError(addError);
      }
  };

  return (
    <Pressable style={styles.button} onPress={addPlace}>
      <Icon name="map-marker-plus" size={28} style={styles.icon} />
    </Pressable>
  );
};

export default AddButton;
