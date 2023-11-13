import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';

const InputSelect = (props) => {
  const data = props.data || [];
  const setCompany = props.setCompany;

  return (
    <SelectDropdown
      data={data}
      disabled={data ? false : true}
      defaultButtonText={data[0]}
      defaultValue={data[0]}
      buttonStyle={styles.inputSelect}
      onSelect={(companyName, index) => {
        setCompany(companyName);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
    />
  );
};

export default InputSelect;
