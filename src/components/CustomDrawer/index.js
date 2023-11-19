import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';

// https://reactnavigation.org/docs/drawer-navigator/

const CustomDrawer = (props) => {
  const users = useSelector((state) => state.users) || [];
  const user = users[0];

  return (
    <>
      <DrawerContentScrollView {...props}>
        <Text style={styles.title}>Suape na Palma da Mão</Text>
        {user && (
          <Text style={styles.welcomeTitle}>{`Bem vindo, ${user.Name}`}</Text>
        )}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </>
  );
};

export default CustomDrawer;
