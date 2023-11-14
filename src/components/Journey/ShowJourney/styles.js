import { StyleSheet } from 'react-native';
import { corBrancaPrincipal, corEscuraPrincipal, corVerdeSecundaria } from '../../../config/colors';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: corBrancaPrincipal,
    borderRadius: 20,
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: corEscuraPrincipal,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: '50%',
  },
  headerTitle: {
    backgroundColor: corVerdeSecundaria,
    minWidth: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerTitleText: {
    color: corBrancaPrincipal,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  }
});

export default styles;
