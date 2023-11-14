import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { addJourney } from '../../../../redux/slices/journeysSlice';
import { showToastError } from '../../../../services/showToasts';

// https://oblador.github.io/react-native-vector-icons/

const AddButton = (props) => {
  const company = props.company;
  const companies = props.companies || [];
  const point = props.point;
  const points = props.points || [];

  const dispatch = useDispatch();

  const addCompanyJourney = () => {
    const companySelected = companies.find((c) => c.Nome === company);
    if (companySelected) {
      dispatch(addJourney(companySelected));
    } else {
      showToastError('Não foi possível adicionar.');
    }
  };

  const addPointJourney = () => {
    const pointSelected = points.find((p) => p.Nome === point);
    if (pointSelected) {
      dispatch(addJourney(pointSelected));
    } else {
      showToastError('Não foi possível adicionar.');
    }
  };

  const addCompanyOrPoint = () => {
    company ? addCompanyJourney() : addPointJourney();
  };

  return (
    <Pressable style={styles.button} onPress={addCompanyOrPoint}>
      <Icon name="map-marker-plus" size={28} style={styles.icon} />
    </Pressable>
  );
};

export default AddButton;
