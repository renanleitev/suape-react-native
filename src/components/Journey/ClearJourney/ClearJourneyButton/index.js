import { useState } from 'react';
import { Text, Pressable } from 'react-native';
import ClearJourneyMessage from '../ClearJourneyMessage';
import styles from './styles';

const ClearJourneyButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable
      style={[styles.button, styles.buttonClear]}
      onPress={() => setModalVisible(true)}
    >
      <Text style={styles.textStyle}>Apagar</Text>
      {modalVisible && (
        <ClearJourneyMessage
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </Pressable>
  );
};

export default ClearJourneyButton;
