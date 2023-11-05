import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
// import { showToastError } from '../../../services/showToasts';
import { useDispatch } from 'react-redux';
import { addJourney } from '../../../redux/slices/journeysSlice';
import styles from './styles';

const InputText = (props) => {
  const type = props.type;
  const companies = props.companies || [];
  const points = props.points || [];

  const dispatch = useDispatch();

  const placeholder = `Pesquisar ${type}...`;
  const errorMessage = `Não foi possível encontrar ${type} com este nome.`;

  const [text, setText] = useState('');

  const addCompanyJourney = () => {
    const regex = new RegExp(text, 'gi');
    const companyFound = companies.find((c) => c.Nome.match(regex));
    if (companyFound) {
      dispatch(addJourney(companyFound));
    } else {
      // showToastError(errorMessage);
    }
  }

  const addPointJourney = () => {
    const regex = new RegExp(text, 'gi');
    const pointFound = points.find((p) => p.Nome.match(regex));
    if (pointFound) {
      dispatch(addJourney(pointFound));
    } else {
      // showToastError(errorMessage);
    }
  }

  const addCompanyOrPoint = () => {
    type === 'empresa' ? addCompanyJourney() : addPointJourney();
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={newText => setText(newText)}
        onSubmitEditing={addCompanyOrPoint}
        placeholder={placeholder}
      />
    </SafeAreaView>
  );
};

export default InputText;