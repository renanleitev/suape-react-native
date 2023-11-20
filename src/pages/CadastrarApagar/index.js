import SignUp from "../../components/User/SignUp";
import DeleteAccount from "../../components/User/DeleteAccount";
import { useSelector } from "react-redux";

const CadastrarApagar = ({ navigation }) => {
    const users = useSelector(state => state.users) || [];
    const user = users[0];
    if (user?.isLoggedIn) {
        return <DeleteAccount navigation={navigation}/>
    } 
    return <SignUp navigation={navigation}/>
}

export default CadastrarApagar;