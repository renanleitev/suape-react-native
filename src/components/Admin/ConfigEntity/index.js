import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import ConfigCompany from './ConfigCompany';
import ConfigPoint from './ConfigPoint';
import styles from './styles';

const ConfigEntity = () => {
  const [entity, setEntity] = useState('company');
  const [companySelected, setCompanySelected] = useState(true);
  const [pointSelected, setPointSelected] = useState(false);
  const handleCompany = () => {
    setCompanySelected(true);
    setPointSelected(false);
    setEntity('company');
  };
  const handlePoint = () => {
    setCompanySelected(false);
    setPointSelected(true);
    setEntity('point');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
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
      {entity === 'company' ? <ConfigCompany /> : <ConfigPoint />}
    </View>
  );
};

export default ConfigEntity;
