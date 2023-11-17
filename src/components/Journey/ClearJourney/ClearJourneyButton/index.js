import { Text, Pressable } from 'react-native';
import styles from './styles';

const ClearJourneyButton = (props) => {
  const setModalVisible = props.setModalVisible;

  return (
    <Pressable
      style={[styles.button, styles.buttonClear]}
      onPress={() => setModalVisible(true)}
    >
      <Text style={styles.textStyle}>Apagar</Text>
    </Pressable>
  );
};

export default ClearJourneyButton;
