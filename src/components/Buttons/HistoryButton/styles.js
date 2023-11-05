import { StyleSheet } from "react-native";
import {corAmarelaPrincipal, corBrancaPrincipal} from "../../../config/colors";

const styles = StyleSheet.create({
    button: {
      padding: 15,
      backgroundColor: corAmarelaPrincipal,
      borderRadius: 50,
      position: 'absolute',
      bottom: 170,
      right: 10,
    },
    icon: {
      color: corBrancaPrincipal,
    },
  });

export default styles;
  