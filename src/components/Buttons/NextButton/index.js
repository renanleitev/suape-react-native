import { useCallback } from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import styles from './styles';

// https://oblador.github.io/react-native-vector-icons/

const NextButton = (props) => {
  const index = props.index;
  const setIndex = props.setIndex;
  const journeys = useSelector((state) => state.journeys);

  const nextItem = useCallback(() => {
    if (index < journeys.length - 1) {
      setIndex(index + 1);
    }
  }, [index]);

  return (
    <Pressable style={styles.button} onPress={nextItem}>
      <Icon name="arrow-forward" size={28} style={styles.icon} />
    </Pressable>
  );
};

export default NextButton;
