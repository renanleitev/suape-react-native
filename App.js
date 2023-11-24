import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { corVerdeSecundaria } from './src/config/colors';
import Ajuda from './src/pages/Ajuda';
import Sobre from './src/pages/Sobre';
import Mapa from './src/pages/Mapa';
import LoginLogout from './src/pages/LoginLogout';
import CadastrarApagar from './src/pages/CadastrarApagar';
import ForgotPassword from './src/components/User/ForgotPassword';
import Dashboard from './src/pages/Dashboard';
import CustomDrawer from './src/components/CustomDrawer';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';
import stackScreenOptions from './stackScreenOptions';

// https://reactnavigation.org/docs/drawer-navigator/

export default function App() {
  // Para realizar a navegação pelo aplicativo
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={corVerdeSecundaria} />
        <Drawer.Navigator
          initialRouteName="Mapa"
          drawerContent={(props) => <CustomDrawer {...props} />}
        >
          <Drawer.Screen
            options={stackScreenOptions}
            name="Mapa"
            component={Mapa}
          />
          <Drawer.Screen
            options={stackScreenOptions}
            name="Login/Logout"
            component={LoginLogout}
          />
          <Drawer.Screen
            options={stackScreenOptions}
            name="Cadastrar/Apagar conta"
            component={CadastrarApagar}
          />
          <Drawer.Screen
            options={stackScreenOptions}
            name="Redefinir senha"
            component={ForgotPassword}
          />
          <Drawer.Screen
            options={stackScreenOptions}
            name="Painel de Administração"
            component={Dashboard}
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
        <Toast topOffset={60}/>
      </NavigationContainer>
    </Provider>
  );
}
