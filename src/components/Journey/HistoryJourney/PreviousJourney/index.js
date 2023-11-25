import { useState, useEffect } from 'react';
import { Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import { getUserById } from '../../../../services/getUserById';
import { showToastInfo, showToastError } from '../../../../services/showToasts';
import styles from './styles';

const PreviousJourney = (props) => {
  const users = useSelector((state) => state.users) || [];
  const user = users[0];
  const modalVisible = props.modalVisible;
  const journey = props.journey;
  const setJourney = props.setJourney;
  const emptyJourneyMessage = 'Nenhum histórico de itinerário disponível.';
  const searchingJourneyMessage = 'Procurando itinerário...';
  const errorJourneyMessage =
  'Não foi possível encontrar o histórico de itinerário';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        showToastInfo(searchingJourneyMessage);
        const userFetched = await getUserById(user);
        setJourney(userFetched.Journey);
      } catch (e) {
        showToastError(errorJourneyMessage);
        setJourney([]);
      }
    };
    fetchUser();
  }, [modalVisible]);

  return (
    <FlatList
      data={journey}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback onPress={() => {}}>
          <Text style={styles.itemText}>{item.Nome}</Text>
        </TouchableWithoutFeedback>
      )}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      ListEmptyComponent={
        <Text style={styles.itemText}>{emptyJourneyMessage}</Text>
      }
      style={styles.flatList}
    />
  );
};

export default PreviousJourney;
