import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import InputSelect from '../../Inputs/InputSelect';
import AddButton from '../../Buttons/AddButton';
import RemoveButton from '../../Buttons/RemoveButton';
import JourneyButton from '../../Buttons/JourneyButton';
import GoButton from '../../Buttons/GoButton';
import Tabs from '../../Tabs';
import styles from './styles';
import { sortArrayByName } from '../../../services/sortArrayByName';
import { useState, useEffect } from 'react';
import { getCompanies } from '../../../services/getCompanies';
import { addCompany } from '../../../redux/slices/companiesSlice';

const SearchCompany = () => {
  const storedCompanies = useSelector((state) => state.companies);
  const [companies, setCompanies] = useState([]);
  const [type, setType] = useState('empresa');
  const sortedCompaniesName = sortArrayByName(companies);
  const [company, setCompany] = useState(sortedCompaniesName[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      const companiesFetched = await getCompanies();
      companiesFetched.forEach((element) => {
        dispatch(addCompany(element));
      });
      setCompanies(companiesFetched);
    };
    if (!storedCompanies) {
      fetchCompanies();
    } else {
      setCompanies(storedCompanies);
    }
  }, []);

  return (
    <>
      <Tabs setCompanies={setCompanies} setType={setType} />
      <InputSelect data={sortedCompaniesName} setCompany={setCompany} type={type} />
      <View style={styles.container}>
        <AddButton company={company} companies={companies} />
        <RemoveButton />
        <JourneyButton />
      </View>
      <GoButton />
    </>
  );
};

export default SearchCompany;
