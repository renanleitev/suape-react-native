import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton  } from '@react-navigation/drawer';
import { corVerdeSecundaria, corBrancaPrincipal } from './src/config/colors';
import Ajuda from './src/pages/Ajuda';
import Sobre from './src/pages/Sobre';
import Mapa from './src/pages/Mapa';
import Login from './src/components/User/Login';
import SignUp from './src/components/User/SignUp';
import ForgotPassword from './src/components/User/ForgotPassword';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';
import CustomDrawer from './CustomDrawer';

// https://reactnavigation.org/docs/drawer-navigator/

const stackScreenOptions = {
  // https://stackoverflow.com/questions/68878108/how-to-set-react-native-drawer-header-icon-hamburger-to-the-right-side
  drawerPosition: 'right',
  headerLeft: false,
  headerRight: () => <DrawerToggleButton tintColor={corBrancaPrincipal}/>,
  drawerStyle: {
    width: 240,
  },
  headerStyle: {
    backgroundColor: corVerdeSecundaria,
  },
  headerTitleStyle: {
    color: corBrancaPrincipal,
  },
};

export default function App() {
  // Para realizar a navegação pelo aplicativo
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={corVerdeSecundaria} />
        <Drawer.Navigator initialRouteName="Mapa" drawerContent={(props) => <CustomDrawer {...props}/>}>
          <Drawer.Screen
            options={stackScreenOptions}
            name="Mapa"
            component={Mapa}
          />
          <Drawer.Screen
            options={stackScreenOptions}
            name="Login"
            component={Login}
          />
          <Drawer.Screen
            options={stackScreenOptions}
            name="Cadastrar"
            component={SignUp}
          />
          <Drawer.Screen
            options={stackScreenOptions}
            name="Redefinir senha"
            component={ForgotPassword}
          />
          <Drawer.Screen
            options={stackScreenOptions}
            name="Ajuda"
            component={Ajuda}
          />
          <Drawer.Screen
            options={stackScreenOptions}
            name="Sobre"
            component={Sobre}
          />
        </Drawer.Navigator>
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}
