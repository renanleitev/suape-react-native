import { StyleSheet } from "react-native";
import {corAzulSecundaria, corBrancaPrincipal} from "../../../config/colors";

const styles = StyleSheet.create({
    button: {
      padding: 15,
      backgroundColor: corAzulSecundaria,
      borderRadius: 50,
      position: 'absolute',
      bottom: 100,
      right: 10,
    },
    icon: {
      color: corBrancaPrincipal,
    },
  });

export default styles;
  