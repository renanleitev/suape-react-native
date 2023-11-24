import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useSelector } from 'react-redux';
import styles from './styles';
import * as Location from 'expo-location';
import { corAzulPrincipal } from '../../config/colors';

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
  const coordinates = useSelector((state) => state.coordinates) || [];
  const finalCoordinates = [initialCoordinate].concat(coordinates);

  const mapRef = useRef('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        showToastError('Permissão de localização negada');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setInitialCoordinate({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      mapRef.current.animateToRegion(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034,
        },
        500
      );
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        ref={mapRef}
        style={styles.map}
      >
        <Polyline
          coordinates={finalCoordinates}
          strokeColor={corAzulPrincipal}
          strokeColors={['#7F0000']}
          strokeWidth={4}
        />
        <Marker
          id="initial"
          key="initial"
          title="initial"
          coordinate={initialCoordinate}
        />
        {finalCoordinates.map((coordinate, index) => {
          return (
            <Marker
              id={index}
              key={index}
              title={`${index}`}
              coordinate={coordinate}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default Map;
