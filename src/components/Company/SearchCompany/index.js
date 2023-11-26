import { View } from 'react-native';
import InputSelect from '../../Inputs/InputSelect';
import AddButton from '../Buttons/AddButton';
import RemoveButton from '../Buttons/RemoveButton';
import JourneyButton from '../Buttons/JourneyButton';
import GoButton from '../Buttons/GoButton';
import TabsCompany from '../TabsCompany';
import styles from './styles';
import { useSortArrayByName } from '../../../hooks/use-sort-array';
import { useState } from 'react';

const SearchCompany = (props) => {
  const setSearchCompanyVisible = props.setSearchCompanyVisible;
  const [data, setData] = useState([]);
  const [type, setType] = useState('empresa');
  const sortedDataName = useSortArrayByName(data);
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
      <GoButton setSearchCompanyVisible={setSearchCompanyVisible}/>
    </>
  );
};

export default SearchCompany;
