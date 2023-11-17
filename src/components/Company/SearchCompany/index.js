import { View } from 'react-native';
import InputSelect from '../../Inputs/InputSelect';
import AddButton from '../Buttons/AddButton';
import RemoveButton from '../Buttons/RemoveButton';
import JourneyButton from '../Buttons/JourneyButton';
import GoButton from '../Buttons/GoButton';
import TabsCompany from '../TabsCompany';
import styles from './styles';
import { sortArrayByName } from '../../../services/sortArrayByName';
import { useState } from 'react';

const SearchCompany = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState('empresa');
  const sortedDataName = sortArrayByName(data);
  const [place, setPlace] = useState(sortedDataName[0]);

  return (
    <>
      <TabsCompany setData={setData} setType={setType} />
      <InputSelect data={sortedDataName} setPlace={setPlace} type={type} />
      <View style={styles.container}>
        <AddButton place={place} data={data} type={type} />
        <RemoveButton />
        <JourneyButton />
      </View>
      <GoButton />
    </>
  );
};

export default SearchCompany;
