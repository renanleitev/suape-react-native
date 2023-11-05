import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#98B3B7',
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerText: {
      color: 'black',
      fontSize: 18,
      padding: 26,
    },
    noteHeader: {
      backgroundColor: '#42f5aa',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
    footer: {
      flex: 1,
      backgroundColor: '#ddd',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
    },
    textInput: {
      alignSelf: 'stretch',
      color: 'black',
      padding: 20,
      backgroundColor: '#ddd',
      borderTopWidth: 2,
      borderTopColor: '#ddd',
    },
    addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#98B3B7',
      width: 70,
      height: 70,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 18,
    },
  });

export default styles;