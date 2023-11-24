import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useSelector } from 'react-redux';
import styles from './styles';
import GetLocation from 'react-native-get-location';
import { showToastError } from '../../services/showToasts';

// API do Google Maps
// const GOOGLE_MAPS_APIKEY = '…';

// Para desenhar as rotas
// https://instamobile.io/react-native-tutorials/react-native-draw-directions-map/

const Map = () => {
  // Localização padrão do Porto de Suape
  const latitude = -8.394097983524112;
  const longitude = -34.97408204488957;
  const originalCoordinate = { latitude: latitude, longitude: longitude };
  const [initialCoordinate, setInitialCoordinate] =
    useState(originalCoordinate);
  const [isLocation, setIsLocation] = useState(false);
  useEffect(() => {
    setInitialCoordinate(initialCoordinate);
  }, [isLocation]);
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 60000,
  })
    .then((location) => {
      setInitialCoordinate({
        latitude: location?.latitude,
        longitude: location?.longitude,
      });
      setIsLocation(true);
    })
    .catch((error) => {
      const locationError = 'Nao foi possivel obter a localizacao';
      showToastError(locationError);
    });
  const coordinates = useSelector((state) => state.coordinates) || [];
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
          <Marker coordinate={initialCoordinate} />
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
