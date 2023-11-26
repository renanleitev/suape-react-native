import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

// https://oblador.github.io/react-native-vector-icons/

const HistoryButton = (props) => {
  const setModalVisible = props.setModalVisible;

  return (
    <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
      <Icon
        name='star'
        size={20}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default HistoryButton;
