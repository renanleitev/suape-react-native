import NotAllowed from "../../components/Admin/NotAllowed";
import ConfigEntity from "../../components/Admin/ConfigEntity";
import { useSelector } from "react-redux";

const Dashboard = ({ navigation }) => {
    const users = useSelector(state => state.users) || [];
    const user = users[0];
    if (user?.isLoggedIn && user?.Role === "ADMIN") {
        return <ConfigEntity navigation={navigation}/>
    }
    return <NotAllowed navigation={navigation}/>
}

export default Dashboard;