import { StyleSheet } from "react-native";
import { corVerdePrincipal, corBrancaPrincipal } from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: corVerdePrincipal,
    },    
    title: {
        color: corBrancaPrincipal,
        padding: 10,
        fontSize: 30
    },
    paragraph: {
        color: corBrancaPrincipal,
        padding: 10,
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10
    },
    image: {
        flex: 1,
        width: 300,
        height: 200,
        resizeMode: 'contain',
        marginLeft: 20,
    }
});

export default styles;