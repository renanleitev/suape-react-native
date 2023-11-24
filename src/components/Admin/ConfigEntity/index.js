import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import ConfigCompany from './ConfigCompany';
import ConfigPoint from './ConfigPoint';
import SelectDropdown from 'react-native-select-dropdown';
import { useDispatch } from 'react-redux';
import {
  emptyCompanies,
  addCompany,
} from '../../../redux/slices/companiesSlice';
import { emptyPoints, addPoint } from '../../../redux/slices/pointsSlice';
import { getCompanies } from '../../../services/getCompanies';
import { getPoints } from '../../../services/getPoints';
import { useSortArrayByName } from '../../../hooks/use-sort-array';
import styles from './styles';

const ConfigEntity = () => {
  const [type, setType] = useState('empresas');
  const [entity, setEntity] = useState({});
  const [companySelected, setCompanySelected] = useState(true);
  const [pointSelected, setPointSelected] = useState(false);
  const [data, setData] = useState([]);
  const [dataName, setDataName] = useState([]);
  const placeholder = `Pesquisar ${type}...`;
  const options = ['Criar', 'Editar', 'Apagar'];
  const [option, setOption] = useState(options[0]);
  const dispatch = useDispatch();
  const handleCompany = () => {
    setCompanySelected(true);
    setPointSelected(false);
    setType('empresas');
    setEntity({});
  };
  const handlePoint = () => {
    setCompanySelected(false);
    setPointSelected(true);
    setType('pontos de interesse');
    setEntity({});
  };
  useEffect(() => {
    const fetchCompanies = async () => {
      dispatch(emptyCompanies());
      const companiesFetched = await getCompanies();
      companiesFetched.forEach((element) => {
        dispatch(addCompany(element));
      });
      setData(companiesFetched);
      setDataName(useSortArrayByName(companiesFetched));
    };
    const fetchPoints = async () => {
      dispatch(emptyPoints());
      const pointsFetched = await getPoints();
      pointsFetched.forEach((element) => {
        dispatch(addPoint(element));
      });
      setData(pointsFetched);
      setDataName(useSortArrayByName(pointsFetched));
    };
    if (companySelected) {
      fetchCompanies();
    }
    if (pointSelected) {
      fetchPoints();
    }
  }, [companySelected, pointSelected]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Pressable
          style={companySelected ? styles.activeButton : styles.disabledButton}
          onPress={handleCompany}
        >
          <Text
            style={companySelected ? styles.activeText : styles.disabledText}
          >
            Empresas
          </Text>
        </Pressable>
        <Pressable
          style={pointSelected ? styles.activeButton : styles.disabledButton}
          onPress={handlePoint}
        >
          <Text style={pointSelected ? styles.activeText : styles.disabledText}>
            Pontos de Interesse
          </Text>
        </Pressable>
      </View>
      <SelectDropdown
        data={dataName}
        search={true}
        searchPlaceHolder={placeholder}
        defaultButtonText={placeholder}
        disabled={data.length <= 0}
        defaultValue={dataName[0]}
        buttonStyle={styles.selectButton}
        onSelect={(optionSelect, index) => {
          const findEntity = data.find(d => d.Nome === optionSelect);
          setEntity(findEntity);
        }}
      />
      <SelectDropdown
        data={options}
        defaultValue={options[0]}
        buttonStyle={styles.selectButton}
        onSelect={(optionSelect, index) => {
          if (optionSelect === 'Criar') setEntity({});
          setOption(optionSelect);
        }}
      />
      {type === 'empresas' ? (
        <ConfigCompany data={entity} option={option} length={data.length}/>
      ) : (
        <ConfigPoint data={entity} option={option} length={data.length}/>
      )}
    </View>
  );
};

export default ConfigEntity;
