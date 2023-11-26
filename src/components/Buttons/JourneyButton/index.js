import React, { useState } from 'react';
import HistoryJourney from '../../Journey/HistoryJourney';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const JourneyButton = () => {
  const [historyCompanyVisible, setHistoryCompanyVisible] = useState(false);

  return (
    <>
      <HistoryJourney
        modalVisible={historyCompanyVisible}
        setModalVisible={setHistoryCompanyVisible}
      />
      <TouchableOpacity
        onPress={() => setHistoryCompanyVisible(true)}
        style={[styles.button, styles.journeyBtn]}
      >
        <Text style={styles.text}>ITINERÁRIO</Text>
      </TouchableOpacity>
    </>
  );
};

export default JourneyButton;
