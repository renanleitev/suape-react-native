import { StyleSheet } from 'react-native';
import { corBrancaPrincipal, corVermelhaPrincipal } from '../../../../config/colors';

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClear: {
    backgroundColor: corVermelhaPrincipal,
  },
  textStyle: {
    color: corBrancaPrincipal,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
