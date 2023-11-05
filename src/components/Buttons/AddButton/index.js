import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

// https://oblador.github.io/react-native-vector-icons/

const AddButton = () => {
    return (
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Icon
          name='map-marker-plus'
          size={28}
          style={styles.icon}
        />
      </Pressable>
    )
}

export default AddButton;