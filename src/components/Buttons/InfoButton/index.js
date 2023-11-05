import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

// https://oblador.github.io/react-native-vector-icons/ 

const InfoButton = (props) => {
  const setModalVisible = props.setModalVisible;

  return (
    <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
      <Icon
        name='office-building-marker-outline'
        size={28}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default InfoButton;
