import { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCoordinate } from '../../../../redux/slices/coordinatesSlice';
import { showToastError } from '../../../../services/showToasts';
import styles from './styles';

const GoButton = () => {
  const dispatch = useDispatch();
  const journeys = useSelector((state) => state.journeys);
  const journeyError = 'O itinerário está vazio.';
  const handleSearch = useCallback(() => {
    if (journeys) {
      journeys.forEach((company) => dispatch(addCoordinate(company)));
    } else {
      showToastError(journeyError);
    }
  }, []);

  return (
    <Pressable style={styles.button} onPress={handleSearch}>
      <Text style={styles.text}>Ir</Text>
    </Pressable>
  );
};

export default GoButton;
