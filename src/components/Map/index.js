import { View } from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import { useSelector } from 'react-redux';
import styles from './styles';

// Localização padrão do Porto de Suape
const latitude = -8.394097983524112;
const longitude = -34.97408204488957;
const originalCoordinate = [latitude, longitude];

// Para desenhar as rotas
// https://instamobile.io/react-native-tutorials/react-native-draw-directions-map/ 

const Map = () => {
  const journeys = useSelector(state => state.journeys);
  const coordinates = [];
  journeys.forEach(company => coordinates.push([company.Latitude, company.Longitude]));


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
      <Marker coordinate={originalCoordinate}/>
    </View>
  );
};

export default Map;
