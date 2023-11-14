import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { emptyJourneys } from '../../../redux/slices/journeysSlice';
import { Text, Pressable } from 'react-native';
import styles from './styles';

const ClearJourneyButton = () => {
  const dispatch = useDispatch();

  const clearJourney = useCallback(() => {
    dispatch(emptyJourneys());
  }, []);

  return (
    <Pressable
      style={[styles.button, styles.buttonClear]}
      onPress={clearJourney}
    >
      <Text style={styles.textStyle}>Apagar</Text>
    </Pressable>
  );
};

export default ClearJourneyButton;
