import { useCallback } from 'react';
import { Text, Pressable } from 'react-native';
import styles from './styles';

const DeleteJourneyButton = (props) => {
  const setModalVisible = props.setModalVisible;

  const handleClearJourney = useCallback(() => {
    setModalVisible(true);
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
