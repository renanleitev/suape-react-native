import { corVerdeSecundaria, corBrancaPrincipal } from './src/config/colors';
import { DrawerToggleButton  } from '@react-navigation/drawer';

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

export default stackScreenOptions;