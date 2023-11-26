import { StyleSheet } from 'react-native';
import {
  corAzulPrincipal,
  corBrancaPrincipal,
} from '../../../config/colors';

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
  mapaBtn: {
    backgroundColor: corAzulPrincipal,
  },
  text: {
    color: corBrancaPrincipal,
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default styles;
