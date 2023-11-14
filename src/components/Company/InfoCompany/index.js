import { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import NextButton from '../Buttons/NextButton';
import PreviousButton from '../Buttons/PreviousButton';
import styles from './styles';

const InfoCompany = () => {
  const storedCompanies = useSelector((state) => state.companies) || [];
  const emptyMessage = 'Nenhuma informação disponível.';
  const [index, setIndex] = useState(0);

  return (
    <>
      <View style={styles.headerTitle}>
        <PreviousButton index={index} setIndex={setIndex} />
        <Text style={styles.headerTitleText}>Informação</Text>
        <NextButton index={index} setIndex={setIndex} />
      </View>
      <View style={styles.infoCompany}>
        {storedCompanies[index] ? (
          <>
            <Text style={styles.itemText}>{storedCompanies[index]?.Nome}</Text>
            <Text style={styles.itemText}>
              {storedCompanies[index]?.Atividade}
            </Text>
            <Text style={styles.itemText}>
              {storedCompanies[index]?.Endereço}
            </Text>
            <Text style={styles.itemText}>
              {storedCompanies[index]?.Contato}
            </Text>
          </>
        ) : (
          <Text style={styles.itemText}>{emptyMessage}</Text>
        )}
      </View>
    </>
  );
};

export default InfoCompany;
