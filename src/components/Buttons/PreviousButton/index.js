import { useCallback } from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

// https://oblador.github.io/react-native-vector-icons/

const PreviousButton = (props) => {
  const index = props.index;
  const setIndex = props.setIndex;

  const previousItem = useCallback(() => {
    if (index > 0) {
        setIndex(index - 1);
    }
  }, [index]);

  return (
    <Pressable style={styles.button} onPress={previousItem}>
      <Icon name="arrow-back" size={28} style={styles.icon} />
    </Pressable>
  );
};

export default PreviousButton;
