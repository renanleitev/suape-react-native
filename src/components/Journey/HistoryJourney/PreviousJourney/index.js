import { Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';

const PreviousJourney = () => {
  const users = useSelector((state) => state.users) || [];
  const user = users[0];
  const journey = user?.Journey;
  const emptyJourneyMessage = 'Nenhum histórico de itinerário disponível.';
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
