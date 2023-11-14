import { Text, Pressable } from 'react-native';
import styles from './styles';

const CloseButton = (props) => {
    const setModalVisible = props.setModalVisible;

    return (
        <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={(previous) => setModalVisible(!previous)}
      >
        <Text style={styles.textStyle}>Fechar</Text>
      </Pressable>
    )
}

export default CloseButton;