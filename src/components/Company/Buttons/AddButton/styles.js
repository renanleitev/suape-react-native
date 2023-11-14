import { StyleSheet } from "react-native";
import {corAzulPrincipal, corBrancaPrincipal} from "../../../../config/colors";

const styles = StyleSheet.create({
    button: {
      padding: 15,
      backgroundColor: corAzulPrincipal,
      borderRadius: 10,
      width: 60,
    },
    icon: {
      color: corBrancaPrincipal,
    },
  });

export default styles;