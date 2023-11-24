import SelectDropdown from 'react-native-select-dropdown';
import { useEffect } from 'react';
import styles from './styles';

const InputSelect = (props) => {
  const data = props.data;
  const setPlace = props.setPlace;
  const type = props.type;
  const placeholder = `Pesquisar ${type}...`;

  useEffect(() => {
    if (data?.length > 0) setPlace(data[0]);
  }, [data]);

  return (
    <SelectDropdown
      data={data}
      search={true}
      searchPlaceHolder={placeholder}
      disabled={!data}
      defaultButtonText={placeholder}
      defaultValue={data[0]}
      buttonStyle={styles.inputSelect}
      onSelect={(placeName, index) => {
        setPlace(placeName);
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
