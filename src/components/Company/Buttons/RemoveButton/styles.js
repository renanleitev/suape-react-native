import { StyleSheet } from "react-native";
import {corVermelhaPrincipal, corBrancaPrincipal} from "../../../../config/colors";

const styles = StyleSheet.create({
    button: {
      padding: 15,
      backgroundColor: corVermelhaPrincipal,
      borderRadius: 10,
      width: 60,
    },
    icon: {
      color: corBrancaPrincipal,
    },
  });

export default styles;