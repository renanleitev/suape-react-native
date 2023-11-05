import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { corVerdeSecundaria, corBrancaPrincipal } from './src/config/colors';
import Ajuda from './src/pages/Ajuda';
import Sobre from './src/pages/Sobre';
import Mapa from './src/pages/Mapa';

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
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={corVerdeSecundaria} />
      <Stack.Navigator>
        <Stack.Screen options={stackScreenOptions} name="Mapa" component={Mapa} />
        <Stack.Screen options={stackScreenOptions} name="Ajuda" component={Ajuda} />
        <Stack.Screen options={stackScreenOptions} name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
