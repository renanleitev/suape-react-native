import React, { useState, useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { getCompanies } from '../../../services/getCompanies';
import { getPoints } from '../../../services/getPoints';
import { useDispatch } from 'react-redux';
import { addCompany, emptyCompanies } from '../../../redux/slices/companiesSlice';
import { addPoint, emptyPoints } from '../../../redux/slices/pointsSlice';
import styles from './styles';

const TabsCompany = (props) => {
  const setType = props.setType;
  const setData = props.setData;
  const [companySelected, setCompanySelected] = useState(true);
  const [pointSelected, setPointSelected] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      dispatch(emptyCompanies());
      const companiesFetched = await getCompanies();
      companiesFetched.forEach((element) => {
        dispatch(addCompany(element));
      });
      setData(companiesFetched);
    };
    const fetchPoints = async () => {
      dispatch(emptyPoints());
      const pointsFetched = await getPoints();
      pointsFetched.forEach((element) => {
        dispatch(addPoint(element));
      });
      setData(pointsFetched);
    };
    if (companySelected) {
      fetchCompanies();
    }
    if (pointSelected) {
      fetchPoints();
    }
  }, [companySelected, pointSelected]);

  const handleCompany = () => {
    setCompanySelected(true);
    setPointSelected(false);
    setType('empresa');
  };

  const handlePoint = () => {
    setCompanySelected(false);
    setPointSelected(true);
    setType('ponto de interesse');
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={companySelected ? styles.activeButton : styles.disabledButton}
        onPress={handleCompany}
      >
        <Text style={companySelected ? styles.activeText : styles.disabledText}>
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
  );
};

export default TabsCompany;
