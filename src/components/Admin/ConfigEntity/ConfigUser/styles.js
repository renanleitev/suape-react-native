import { StyleSheet } from 'react-native';
import { corVerdePrincipal, corAzulPrincipal, corBrancaPrincipal } from '../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: corVerdePrincipal,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  saveBtn: {
    width: '80%',
    backgroundColor: corAzulPrincipal,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: corBrancaPrincipal,
    alignSelf: 'center',
  }
});

export default styles;
