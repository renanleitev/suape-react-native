import { StyleSheet } from 'react-native';
import {
  corAzulSecundaria,
  corBrancaPrincipal,
  corEscuraPrincipal,
} from '../../../config/colors';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: corAzulSecundaria,
    borderRadius: 50,
    position: 'absolute',
    bottom: 130,
    right: 10,
    shadowColor: corEscuraPrincipal,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    color: corBrancaPrincipal,
  },
});

export default styles;
