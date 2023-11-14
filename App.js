import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { corVerdeSecundaria, corBrancaPrincipal } from './src/config/colors';
import Ajuda from './src/pages/Ajuda';
import Sobre from './src/pages/Sobre';
import Mapa from './src/pages/Mapa';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';

const stackScreenOptions = {
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
        <Drawer.Navigator initialRouteName="Mapa">
          <Drawer.Screen
            options={stackScreenOptions}
            name="Mapa"
            component={Mapa}
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
