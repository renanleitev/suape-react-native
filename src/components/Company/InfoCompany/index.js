import { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import NextButton from '../Buttons/NextButton';
import PreviousButton from '../Buttons/PreviousButton';
import { Linking } from 'react-native';
import { useContactValidation } from '../../../hooks/use-contact';
import styles from './styles';

const InfoCompany = () => {
  const journeys = useSelector((state) => state.journeys) || [];
  const emptyMessage = 'Nenhuma informação disponível.';
  const [index, setIndex] = useState(0);
  const place = journeys[index];
  const originalContacts = place?.Contato.split(',');
  const convertedContacts = useContactValidation(originalContacts);
  const activity = place?.Atividade;
  const address = place?.Endereço;

  return (
    <>
      <View style={styles.headerTitle}>
        <PreviousButton index={index} setIndex={setIndex} />
        <Text style={styles.headerTitleText}>Informação</Text>
        <NextButton index={index} setIndex={setIndex} />
      </View>
      <View style={styles.infoCompany}>
        {place ? (
          <>
            <Text style={styles.itemText}>{place?.Nome}</Text>
            <Text style={styles.itemText}>
              Atividade: {activity}
            </Text>
            <Text style={styles.itemText}>
              Endereço: {address}
            </Text>
            <Text>Contato:</Text>
            {convertedContacts.forEach((contact, index) => {
              <Text
                style={styles.itemText}
                onPress={() => Linking.openURL(contact)}
              >
                {originalContacts[index]}
              </Text>;
            })}
          </>
        ) : (
          <Text style={styles.itemText}>{emptyMessage}</Text>
        )}
      </View>
    </>
  );
};

export default InfoCompany;
