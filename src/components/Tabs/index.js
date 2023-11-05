import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

const Tabs = () => {
  const [companySelected, setCompanySelected] = useState(true);
  const [pointSelected, setPointSelected] = useState(false);

  const handleCompany = () => {
    setCompanySelected(true);
    setPointSelected(false);
  };

  const handlePoint = () => {
    setCompanySelected(false);
    setPointSelected(true);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={companySelected ? styles.activeButton : styles.disabledButton}
        onPress={handleCompany}
      >
        <Text style={companySelected ? styles.activeText : styles.disabledText}>Empresas</Text>
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

export default Tabs;
