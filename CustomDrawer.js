import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Text, StyleSheet } from 'react-native';

// https://reactnavigation.org/docs/drawer-navigator/

const styles = StyleSheet.create({
  title: {
    padding: 30,
    textAlign: 'center',
  },
});

const CustomDrawer = (props) => {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <Text style={styles.title}>Suape na Palma da Mão</Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </>
  );
};

export default CustomDrawer;
