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
    alignSelf: 'center',
    fontSize: 20,
  },
  title: {
    color: corBrancaPrincipal,
    fontSize: 20,
    padding: 10,
  },
  button: {
    backgroundColor: corAzulPrincipal,
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default styles;
