import { useCallback } from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

// https://oblador.github.io/react-native-vector-icons/

const ActualLocationButton = (props) => {
  const initialCoordinate = props.initialCoordinate;
  const mapRef = props.mapRef;

  const handleLocation = useCallback(() => {
    mapRef.current.animateToRegion(
      {
        latitude: initialCoordinate.latitude,
        longitude: initialCoordinate.longitude,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034,
      },
      500
    );
  });

  return (
    <Pressable style={styles.button} onPress={handleLocation}>
      <Icon
        name='my-location'
        size={20}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default ActualLocationButton;
