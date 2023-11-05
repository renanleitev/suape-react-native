import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

const InputSelect = () => {
  return (
    <SelectDropdown
      data={countries}
      defaultButtonText='Empresas'
      buttonStyle={styles.inputSelect}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />
  );
};

export default InputSelect;
