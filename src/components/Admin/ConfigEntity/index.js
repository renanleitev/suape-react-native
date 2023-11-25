import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable } from 'react-native';
import ConfigCompany from './ConfigCompany';
import ConfigPoint from './ConfigPoint';
import ConfigUser from './ConfigUser';
import SelectDropdown from 'react-native-select-dropdown';
import { getCompanies } from '../../../services/getCompanies';
import { getPoints } from '../../../services/getPoints';
import { getUsers } from '../../../services/getUsers';
import { useSortArrayByName } from '../../../hooks/use-sort-array';
import styles from './styles';

const ConfigEntity = () => {
  const [type, setType] = useState('empresas');
  const [entity, setEntity] = useState({});
  const [companySelected, setCompanySelected] = useState(true);
  const [pointSelected, setPointSelected] = useState(false);
  const [userSelected, setUserSelected] = useState(false);
  const [data, setData] = useState([]);
  const [dataName, setDataName] = useState([]);
  const placeholder = `Pesquisar ${type}...`;
  const criar = 'Criar';
  const editar = 'Editar';
  const apagar = 'Apagar';
  const options = [criar, editar, apagar];
  const empresas = 'Empresas';
  const pontos = 'Pontos';
  const usuarios = 'Usuários';
  const [option, setOption] = useState(options[0]);
  const handleCompany = () => {
    setCompanySelected(true);
    setPointSelected(false);
    setUserSelected(false);
    setType(empresas);
    setEntity({});
  };
  const handlePoint = () => {
    setCompanySelected(false);
    setPointSelected(true);
    setUserSelected(false);
    setType(pontos);
    setEntity({});
  };
  const handleUser = () => {
    setCompanySelected(false);
    setPointSelected(false);
    setUserSelected(true);
    setType(usuarios);
    setEntity({});
  };
  useEffect(() => {
    const fetchCompanies = async () => {
      const companiesFetched = await getCompanies();
      setData(companiesFetched);
      setDataName(useSortArrayByName(companiesFetched));
    };
    const fetchPoints = async () => {
      const pointsFetched = await getPoints();
      setData(pointsFetched);
      setDataName(useSortArrayByName(pointsFetched));
    };
    const fetchUsers = async () => {
      const usersFetched = await getUsers();
      setData(usersFetched);
      setDataName(useSortArrayByName(usersFetched));
    };
    if (companySelected) {
      fetchCompanies();
    }
    if (pointSelected) {
      fetchPoints();
    }
    if (userSelected) {
      fetchUsers();
    }
  }, [companySelected, pointSelected, userSelected]);

  const renderEntity = () => {
    switch (type) {
      case empresas:
        return (
          <ConfigCompany data={entity} option={option} />
        );
      case pontos:
        return (
          <ConfigPoint data={entity} option={option} />
        );
      case usuarios:
        return (
          <ConfigUser data={entity} option={option} />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Pressable
            style={
              companySelected ? styles.activeButton : styles.disabledButton
            }
            onPress={handleCompany}
          >
            <Text
              style={companySelected ? styles.activeText : styles.disabledText}
            >
              {empresas}
            </Text>
          </Pressable>
          <Pressable
            style={pointSelected ? styles.activeButton : styles.disabledButton}
            onPress={handlePoint}
          >
            <Text
              style={pointSelected ? styles.activeText : styles.disabledText}
            >
              {pontos}
            </Text>
          </Pressable>
          <Pressable
            style={userSelected ? styles.activeButton : styles.disabledButton}
            onPress={handleUser}
          >
            <Text
              style={userSelected ? styles.activeText : styles.disabledText}
            >
              {usuarios}
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
            if (companySelected || pointSelected) {
              const findEntity = data.find((d) => d.Nome === optionSelect);
              setEntity(findEntity);
            } else if (userSelected) {
              const findEntity = data.find((d) => d.Name === optionSelect);
              setEntity(findEntity);
            }
          }}
        />
        <SelectDropdown
          data={options}
          defaultValue={options[0]}
          buttonStyle={styles.selectButton}
          onSelect={(optionSelect, index) => {
            if (optionSelect === criar) setEntity({});
            setOption(optionSelect);
          }}
        />
        {renderEntity()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfigEntity;
