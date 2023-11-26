import { StyleSheet } from 'react-native';
import {
  corVerdeSecundaria,
  corBrancaPrincipal,
  corEscuraPrincipal,
} from '../../../config/colors';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: corVerdeSecundaria,
    borderRadius: 50,
    position: 'absolute',
    bottom: 70,
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
