import { StyleSheet } from 'react-native';
import { corBrancaPrincipal } from "../../../../config/colors";

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: corBrancaPrincipal,
    borderRadius: 10,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20,
  }
});

export default styles;
