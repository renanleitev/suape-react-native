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
    padding: 35,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  flatList: {
    flexGrow: 0,
    marginTop: 20,
  },
  itemText: {
    marginBottom: 20,
  },
  headerTitle: {
    backgroundColor: corVerdeSecundaria,
    minWidth: '50%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    paddingLeft: 75,
    paddingRight: 75,
  },
  headerTitleText: {
    color: corBrancaPrincipal,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16
  }
});

export default styles;
