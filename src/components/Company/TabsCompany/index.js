import React, { useState, useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { getCompanies } from '../../../services/getCompanies';
import { getPoints } from '../../../services/getPoints';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany } from '../../../redux/slices/companiesSlice';
import { addPoint } from '../../../redux/slices/pointsSlice';
import styles from './styles';

const TabsCompany = (props) => {
  const setCompanies = props.setCompanies;
  const setType = props.setType;
  const storedCompanies = useSelector((state) => state.companies);
  const storedPoints = useSelector((state) => state.points);
  const [companySelected, setCompanySelected] = useState(true);
  const [pointSelected, setPointSelected] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      const companiesFetched = await getCompanies();
      companiesFetched.forEach((element) => {
        dispatch(addCompany(element));
      });
      setCompanies(companiesFetched);
    };
    const fetchPoints = async () => {
      const pointsFetched = await getPoints();
      pointsFetched.forEach((element) => {
        dispatch(addPoint(element));
      });
      setCompanies(pointsFetched);
    };
    if (companySelected && !storedCompanies) {
      fetchCompanies();
    }
    if (pointSelected && !storedPoints) {
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
