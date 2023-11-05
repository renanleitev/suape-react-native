import { View } from 'react-native';
import InputSelect from '../../InputSelect';
import InputText from '../../InputText';
import AddButton from '../../Buttons/AddButton';
import RemoveButton from '../../Buttons/RemoveButton';
import JourneyButton from '../../Buttons/JourneyButton';
import GoButton from '../../Buttons/GoButton';
import styles from './styles';

const SearchCompany = () => {
  return (
    <>
      <InputText />
      <InputSelect />
      <View style={styles.container}>
        <AddButton />
        <RemoveButton />
        <JourneyButton />
      </View>
      <GoButton />
    </>
  );
};

export default SearchCompany;
