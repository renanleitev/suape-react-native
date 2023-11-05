import { useSelector } from 'react-redux';
import { View } from 'react-native';
import InputSelect from '../../Inputs/InputSelect';
import InputText from '../../Inputs/InputText';
import AddButton from '../../Buttons/AddButton';
import RemoveButton from '../../Buttons/RemoveButton';
import JourneyButton from '../../Buttons/JourneyButton';
import GoButton from '../../Buttons/GoButton';
import Tabs from '../../Tabs';
import styles from './styles';
import { sortArray } from '../../../services/sortArray';
import { useState } from 'react';

const SearchCompany = () => {
  const companies = useSelector(state => state.companies) || [];
  const sortedCompaniesName = sortArray(companies);
  const [company, setCompany] = useState(sortedCompaniesName[0]);
  return (
    <>
      <Tabs/>
      <InputText type={'empresa'} companies={companies} company={company}/>
      <InputSelect data={sortedCompaniesName} setCompany={setCompany}/>
      <View style={styles.container}>
        <AddButton company={company} companies={companies}/>
        <RemoveButton/>
        <JourneyButton/>
      </View>
      <GoButton />
    </>
  );
};

export default SearchCompany;
