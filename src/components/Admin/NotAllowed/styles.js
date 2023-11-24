import { StyleSheet } from 'react-native';
import {
  corVerdePrincipal,
  corBrancaPrincipal,
  corAzulPrincipal,
} from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: corVerdePrincipal,
  },
  text: {
    color: corBrancaPrincipal,
  },
  title: {
    color: corBrancaPrincipal,
    fontSize: 20,
    padding: 10,
  },
  button: {
    backgroundColor: corAzulPrincipal,
    borderRadius: 20,
    padding: 20,
  },
});

export default styles;
