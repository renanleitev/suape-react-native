import { StyleSheet } from 'react-native';
import { corVerdeSecundaria, corBrancaPrincipal, } from '../../../config/colors';

const styles = StyleSheet.create({
  button: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  journeyBtn: {
    backgroundColor: corVerdeSecundaria,
  },
  text: {
    color: corBrancaPrincipal,
    alignSelf: 'center',
    fontSize: 20,
  }
});

export default styles;
