import { Text, TouchableOpacity } from 'react-native';
import { MapaPage } from '../../../constants';
import styles from './styles';

const ReturnButton = ({ navigation }) => {

  const returnMap = () => {
    navigation.navigate(MapaPage);
  };

  return (
    <TouchableOpacity onPress={returnMap} style={[styles.button, styles.mapaBtn]}>
      <Text style={styles.text}>MAPA</Text>
    </TouchableOpacity>
  );
};

export default ReturnButton;
