import { StyleSheet } from 'react-native';
import { corBrancaPrincipal, corVerdeSecundaria } from '../../../config/colors';

const styles = StyleSheet.create({
  itemText: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: corBrancaPrincipal,
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
