import { StyleSheet } from 'react-native';
import { corVerdeSecundaria, corBrancaPrincipal } from '../../../config/colors';

const styles = StyleSheet.create({
  inputView: {
    width: 300,
    backgroundColor: corVerdeSecundaria,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    width: 200,
    height: 50,
    color: corBrancaPrincipal,
  },
  icon: {
    color: corBrancaPrincipal,
    position: 'absolute',
    marginLeft: 240,
    bottom: 15,
  },
});

export default styles;
