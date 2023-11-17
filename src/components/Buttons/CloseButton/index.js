import { Text, Pressable } from 'react-native';
import styles from './styles';

const CloseButton = (props) => {
  const setModalVisible = props.setModalVisible;
  const text = props.text;

  return (
    <Pressable
      style={[styles.button, styles.buttonClose]}
      onPress={(previous) => setModalVisible(!previous)}
    >
      <Text style={styles.textStyle}>{text ? text : 'Fechar'}</Text>
    </Pressable>
  );
};

export default CloseButton;
