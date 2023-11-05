import { View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

// Localização padrão do Porto de Suape
const latitude = -8.394097983524112;
const longitude = -34.97408204488957;

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={styles.map}
      />
    </View>
  );
};

export default Map;
