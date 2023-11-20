import { useCallback } from 'react';
import { Text, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { showToastError } from '../../../../../services/showToasts';
import styles from './styles';

const DeleteJourneyButton = (props) => {
  const setModalVisible = props.setModalVisible;
  const users = useSelector(state => state.users) || [];
  const user = users[0];
  const journeys = user?.Journey;
  const clearJourneyError = 'O histórico de itinerário está vazio.';

  const handleClearJourney = useCallback(() => {
    if (journeys?.length > 0) {
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

export default DeleteJourneyButton;
