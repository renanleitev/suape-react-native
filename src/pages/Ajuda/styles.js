import { StyleSheet } from "react-native";
import { corVerdePrincipal, corBrancaPrincipal } from "../../config/colors";

const spaceBetween = 40;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: corVerdePrincipal,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    questionContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-around',  
        backgroundColor: corBrancaPrincipal,
        marginLeft: '2.5%',
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
    },
    questionText: {
        fontWeight: 'bold',
    },
    expandAnswer: {
        fontSize: 16,
    },
    contextLeft: {
        alignItems: 'flex-start',
        marginRight: spaceBetween,
        width: '70%'
    },
    contextRight: {
        alignItems: 'flex-end',
        marginLeft: spaceBetween,
        alignSelf: 'center',
    },
    answerContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-around',  
        backgroundColor: corBrancaPrincipal,
        marginLeft: '2.5%',
        borderRadius: 10,
        padding: 10,
    },
    answerText: {}
});

export default styles;