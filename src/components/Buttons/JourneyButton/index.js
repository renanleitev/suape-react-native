import { Pressable, Text, View } from 'react-native';
import styles from './styles';

const JourneyButton = () => {
  return (
    <Pressable style={styles.button}>
      <View style={styles.container}>
        <Text style={styles.text}>Itinerário</Text>
        <Text style={styles.counter}>10</Text>
      </View>
    </Pressable>
  );
};

export default JourneyButton;
