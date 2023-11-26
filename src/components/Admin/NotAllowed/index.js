import { View, Text, Pressable } from 'react-native';
import ReturnButton from '../../Buttons/ReturnButton';
import { LoginLogoutPage } from '../../../constants';
import styles from './styles';

const NotAllowed = ({ navigation }) => {
  const notAllowedMessage = 'Acesso negado';
  const loginButton = 'LOGIN';

  const handleNotAllowed = () => {
    navigation.navigate(LoginLogoutPage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{notAllowedMessage}</Text>
      <ReturnButton navigation={navigation} />
      <Pressable style={styles.button} onPress={handleNotAllowed}>
        <Text style={styles.text}>{loginButton}</Text>
      </Pressable>
    </View>
  );
};

export default NotAllowed;
