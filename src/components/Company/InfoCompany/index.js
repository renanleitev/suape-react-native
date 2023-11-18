import { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Linking } from 'react-native';
import NextButton from '../Buttons/NextButton';
import PreviousButton from '../Buttons/PreviousButton';
import { useContactValidation } from '../../../hooks/use-contact';
import styles from './styles';

const InfoCompany = () => {
  const journeys = useSelector((state) => state.journeys) || [];
  const emptyMessage = 'Nenhuma informação disponível.';
  const [index, setIndex] = useState(0);
  const place = journeys[index];
  const contacts = place?.Contato.replace('/', ',');
  const originalContacts = contacts.split(',');
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
            <Text style={styles.itemText}>Atividade: {activity}</Text>
            <Text style={styles.itemText}>Endereço: {address}</Text>
            <Text style={styles.itemText}>
              Contato:
              {convertedContacts.map((contact, index) => {
                return (
                  <Text
                    style={styles.linkText}
                    onPress={() => Linking.openURL(contact)}
                    key={index}
                  >
                    {" " + originalContacts[index]}
                  </Text>
                );
              })}
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
