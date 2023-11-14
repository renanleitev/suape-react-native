import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';

const InputSelect = (props) => {
  const data = props.data;
  const setCompany = props.setCompany;
  const type = props.type;
  const placeholder = `Pesquisar ${type}...`;

  return (
    <SelectDropdown
      data={data}
      search={true}
      searchPlaceHolder={placeholder}
      disabled={data ? false : true}
      defaultButtonText={placeholder}
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
