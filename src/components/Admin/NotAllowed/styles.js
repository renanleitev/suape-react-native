import { StyleSheet } from 'react-native';
import {
  corVerdePrincipal,
  corBrancaPrincipal,
  corAzulPrincipal,
} from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: corVerdePrincipal,
  },
  text: {
    color: corBrancaPrincipal,
  },
  title: {
    color: corBrancaPrincipal,
    fontSize: 20,
  },
  button: {
    backgroundColor: corAzulPrincipal,
    borderRadius: 20,
    padding: 20,
  },
});

export default styles;
