import { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import NextButton from '../Buttons/NextButton';
import PreviousButton from '../Buttons/PreviousButton';
import styles from './styles';

const InfoCompany = () => {
  const places = useSelector((state) => state.journeys) || [];
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
        {places[index] ? (
          <>
            <Text style={styles.itemText}>{places[index]?.Nome}</Text>
            <Text style={styles.itemText}>
              Atividade: {places[index]?.Atividade}
            </Text>
            <Text style={styles.itemText}>
              Endereço: {places[index]?.Endereço}
            </Text>
            <Text style={styles.itemText}>
              Contato: {places[index]?.Contato}
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
