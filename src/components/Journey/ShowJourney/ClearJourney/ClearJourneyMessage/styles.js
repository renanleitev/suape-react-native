import { StyleSheet } from 'react-native';
import {
  corBrancaPrincipal,
  corVermelhaPrincipal,
} from '../../../../../config/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
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
  clearMessage: {
    padding: 20,
  },
});

export default styles;
