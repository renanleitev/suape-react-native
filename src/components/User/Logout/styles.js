import { StyleSheet } from 'react-native';
import { corVerdePrincipal, corBrancaPrincipal, corAzulPrincipal } from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: corVerdePrincipal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: corBrancaPrincipal,
    marginTop: 20,
    marginBottom: 40,
  },
  logoutBtn: {
    width: '80%',
    backgroundColor: corAzulPrincipal,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    color: corBrancaPrincipal,
    alignSelf: 'center',
    fontSize: 30,
  }
});

export default styles;
