import { View, Text, Pressable } from 'react-native';
import { MapaPage } from '../../../constants';
import styles from './styles';

const NotAllowed = ({ navigation }) => {
  const handleNotAllowed = () => {
    navigation.navigate(MapaPage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesso negado.</Text>
      <Pressable style={styles.button} onPress={handleNotAllowed}>
        <Text style={styles.text}>Voltar</Text>
      </Pressable>
    </View>
  );
};

export default NotAllowed;
