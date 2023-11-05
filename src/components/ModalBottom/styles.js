import { StyleSheet } from 'react-native';
import {corVerdePrincipal} from "../../config/colors";

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "transparent",
  },
  modal: {
    height: "100%",
    marginTop: "100%",
    backgroundColor: corVerdePrincipal,
  },
  keyboardVisible: {
    marginTop: 0,
  }
});

export default styles;
