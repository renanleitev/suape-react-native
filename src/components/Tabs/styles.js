import { StyleSheet } from 'react-native';
import { corBrancaPrincipal, corVerdePrincipal } from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    maxHeight: 60,
  },
  activeButton: {
    padding: 15,
    backgroundColor: corBrancaPrincipal,
    marginTop: 10,
  },
  disabledButton: {
    padding: 15,
    backgroundColor: corVerdePrincipal,
    marginTop: 10,
    borderBottomColor: corBrancaPrincipal,
    borderBottomWidth: 2,
  },
  activeText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 16,
    paddingLeft: 3,
    paddingRight: 3,
  },
  disabledText: {
    color: corBrancaPrincipal,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 16,
    paddingLeft: 3,
    paddingRight: 3,
  },
});

export default styles;
