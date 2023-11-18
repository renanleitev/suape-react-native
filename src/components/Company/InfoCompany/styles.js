import { StyleSheet } from 'react-native';
import { corBrancaPrincipal, corVerdeSecundaria, corAzulPrincipal } from '../../../config/colors';

const styles = StyleSheet.create({
  itemText: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: corBrancaPrincipal,
    fontSize: 16,
  },
  linkText: {
    color: corAzulPrincipal,
  },
  headerTitle: {
    backgroundColor: corVerdeSecundaria,
    minWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitleText: {
    color: corBrancaPrincipal,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
  },
});

export default styles;
