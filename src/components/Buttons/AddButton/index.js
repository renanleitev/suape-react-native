import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { addJourney } from '../../../redux/slices/journeysSlice';

// https://oblador.github.io/react-native-vector-icons/

const AddButton = (props) => {
  const company = props.company;
  const companies = props.companies || [];
  const point = props.point;
  const points = props.points || [];

  const dispatch = useDispatch();

  const addCompanyJourney = () => {
    const companySelected = companies.find((c) => c.Nome === company);
    dispatch(addJourney(companySelected));
  }

  const addPointJourney = () => {
    const pointSelected = points.find((p) => p.Nome === point);
    dispatch(addJourney(pointSelected));
  }

  const addCompanyOrPoint = () => {
    company ? addCompanyJourney() : addPointJourney();
  }

  return (
    <Pressable style={styles.button} onPress={addCompanyOrPoint}>
      <Icon name="map-marker-plus" size={28} style={styles.icon} />
    </Pressable>
  );
};

export default AddButton;
