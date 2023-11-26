import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useSelector } from 'react-redux';
import styles from './styles';
import * as Location from 'expo-location';
import { routeColorsArray } from '../../config/colors';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '../../../apiKey';

const Map = (props) => {
  const initialCoordinate = props.initialCoordinate;
  const setInitialCoordinate = props.setInitialCoordinate;
  const mapRef = props.mapRef;
  const coordinates = useSelector((state) => state.coordinates) || [];
  const journeys = useSelector((state) => state.journeys) || [];
  const finalCoordinates = [initialCoordinate].concat(coordinates);

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

  useEffect(() => {
    const edgeLevel = 50;
    mapRef.current.fitToCoordinates(
      finalCoordinates,
      {
        edgePadding: {
          top: edgeLevel,
          right: edgeLevel,
          bottom: edgeLevel,
          left: edgeLevel,
        },
      },
      { animated: true }
    );
  }, [coordinates]);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: initialCoordinate.latitude,
          longitude: initialCoordinate.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        ref={mapRef}
        style={styles.map}
      >
        {finalCoordinates.map((coordinates, index) => {
          return (
            <MapViewDirections
              id={index}
              key={index}
              origin={finalCoordinates[index]}
              destination={finalCoordinates[index + 1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={4}
              strokeColor={routeColorsArray[index]}
            />
          );
        })}
        <Marker
          id="initial"
          key="initial"
          title="Localização inicial"
          coordinate={initialCoordinate}
        />
        {finalCoordinates.map((coordinate, index) => {
          if (index > 0) {
            return (
              <Marker id={index} key={index} coordinate={coordinate}>
                <Callout>
                  <View>
                    <Text>
                      {index}. {journeys[index - 1]?.Nome}
                    </Text>
                    <Text>Contato: {journeys[index - 1]?.Contato}</Text>
                  </View>
                </Callout>
              </Marker>
            );
          }
        })}
      </MapView>
    </View>
  );
};

export default Map;
