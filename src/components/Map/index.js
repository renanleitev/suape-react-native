import { View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useSelector } from 'react-redux';
import styles from './styles';

// API do Google Maps
// const GOOGLE_MAPS_APIKEY = '…';

// Localização padrão do Porto de Suape
const latitude = -8.394097983524112;
const longitude = -34.97408204488957;
const originalCoordinate = { latitude: latitude, longitude: longitude };

// Para desenhar as rotas
// https://instamobile.io/react-native-tutorials/react-native-draw-directions-map/

const Map = () => {
  const coordinates = useSelector((state) => state.coordinates);
  coordinates.unshift(originalCoordinate);

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
      >
        <Polyline
          coordinates={coordinates}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6}
        />
        {coordinates ? (
          <Marker coordinate={originalCoordinate} />
        ) : (
          coordinates.map((coordinate) => {
            <Marker coordinate={coordinate} />;
          })
        )}
      </MapView>
    </View>
  );
};

export default Map;
