import { Pressable, Text } from 'react-native';
import styles from './styles';

const GoButton = () => {

  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>Ir</Text>
    </Pressable>
  );
};

export default GoButton;
