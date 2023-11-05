import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import ShowJourney from '../../Journey/ShowJourney';
import styles from './styles';
import { useSelector } from 'react-redux';

const JourneyButton = () => {
  const journeys = useSelector((state) => state.journeys) || [];
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
      <View style={styles.container}>
        <Text style={styles.text}>Itinerário</Text>
        <Text style={styles.counter}>{journeys.length}</Text>
        <ShowJourney
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          journeys={journeys}
        />
      </View>
    </Pressable>
  );
};

export default JourneyButton;
