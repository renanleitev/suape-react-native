import { useCallback } from 'react';
import { Text, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { showToastError } from '../../../../../services/showToasts';
import styles from './styles';

const ClearJourneyButton = (props) => {
  const setModalVisible = props.setModalVisible;
  const journeys = useSelector((state) => state.journeys);
  const clearJourneyError = 'O itinerário está vazio.';

  const handleClearJourney = useCallback(() => {
    if (journeys.length > 0) {
      setModalVisible(true);
    } else {
      showToastError(clearJourneyError);
    }
  }, []);

  return (
    <Pressable
      style={[styles.button, styles.buttonClear]}
      onPress={handleClearJourney}
    >
      <Text style={styles.textStyle}>Apagar</Text>
    </Pressable>
  );
};

export default ClearJourneyButton;
