import { StyleSheet } from "react-native";
import {corVerdeSecundaria, corBrancaPrincipal} from "../../../config/colors";

const styles = StyleSheet.create({
    button: {
      padding: 15,
      backgroundColor: corVerdeSecundaria,
      borderRadius: 50,
      position: 'absolute',
      bottom: 30,
      right: 10,
    },
    icon: {
      color: corBrancaPrincipal,
    },
  });

export default styles;
  