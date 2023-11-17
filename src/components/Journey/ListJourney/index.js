import { Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';

const ListJourney = () => {
  const journeys = useSelector((state) => state.journeys) || [];
  const emptyJourneyMessage = 'Nenhum itinerário disponível.';
  return (
    <FlatList
      data={journeys}
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

export default ListJourney;
