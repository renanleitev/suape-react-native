import Login from "../../components/User/Login";
import Logout from "../../components/User/Logout";
import { useSelector } from "react-redux";

const LoginLogout = ({ navigation }) => {
    const users = useSelector(state => state.users) || [];
    const user = users[0];
    if (user?.isLoggedIn) {
        return <Logout navigation={navigation}/>;
    }
    return <Login navigation={navigation}/>;
}

export default LoginLogout;