import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { addJourney } from '../../../../redux/slices/journeysSlice';
import {
  showToastSuccess,
  showToastError,
} from '../../../../services/showToasts';
import { capitalizeFirstLetter } from '../../../../hooks/use-letters';

// https://oblador.github.io/react-native-vector-icons/

const AddButton = (props) => {
  const place = props.place;
  const type = props.type;
  const data = props.data;
  const journeys = useSelector((state) => state.journeys) || [];
  const addSuccess = `${capitalizeFirstLetter(
    type
  )} adicionado(a) com sucesso.`;
  const addError = `Selecione antes de adicionar ${type}.`;
  const addLimit = 'Limite máximo de itinerário atingido.';

  const dispatch = useDispatch();

  const addPlace = () => {
    if (journeys.length >= 5) {
      showToastError(addLimit);
    } else {
      if (place) {
        const placeFound = data.find((p) => p.Nome === place);
        dispatch(addJourney(placeFound));
        showToastSuccess(addSuccess);
      } else {
        showToastError(addError);
      }
    }
  };

  return (
    <Pressable style={styles.button} onPress={addPlace}>
      <Icon name="map-marker-plus" size={28} style={styles.icon} />
    </Pressable>
  );
};

export default AddButton;
