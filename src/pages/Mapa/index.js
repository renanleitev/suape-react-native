import React, { useState, useRef } from 'react';
import Map from '../../components/Map';
import ModalBottom from '../../components/ModalBottom';
import SearchButton from '../../components/Buttons/SearchButton';
import InfoButton from '../../components/Buttons/InfoButton';
import HistoryButton from '../../components/Buttons/HistoryButton';
import SearchCompany from '../../components/Company/SearchCompany';
import InfoCompany from '../../components/Company/InfoCompany';
import HistoryJourney from '../../components/Journey/HistoryJourney';
import ActualLocationButton from '../../components/Buttons/ActualLocationButton';

const Mapa = () => {
  // Localização padrão do Porto de Suape
  const latitude = -8.394097983524112;
  const longitude = -34.97408204488957;
  const originalCoordinate = { latitude: latitude, longitude: longitude };

  const [searchCompanyVisible, setSearchCompanyVisible] = useState(false);
  const [infoCompanyVisible, setInfoCompanyVisible] = useState(false);
  const [historyCompanyVisible, setHistoryCompanyVisible] = useState(false);
  const [initialCoordinate, setInitialCoordinate] =
    useState(originalCoordinate);
  const mapRef = useRef('');

  return (
    <>
      <Map
        initialCoordinate={initialCoordinate}
        setInitialCoordinate={setInitialCoordinate}
        mapRef={mapRef}
      />
      <ModalBottom
        modalVisible={searchCompanyVisible}
        setModalVisible={setSearchCompanyVisible}
      >
        <SearchCompany setSearchCompanyVisible={setSearchCompanyVisible} />
      </ModalBottom>
      <ModalBottom
        modalVisible={infoCompanyVisible}
        setModalVisible={setInfoCompanyVisible}
      >
        <InfoCompany />
      </ModalBottom>
      <HistoryJourney
        modalVisible={historyCompanyVisible}
        setModalVisible={setHistoryCompanyVisible}
      />
      <ActualLocationButton initialCoordinate={initialCoordinate} mapRef={mapRef}/>
      <HistoryButton setModalVisible={setHistoryCompanyVisible} />
      <InfoButton setModalVisible={setInfoCompanyVisible} />
      <SearchButton setModalVisible={setSearchCompanyVisible} />
    </>
  );
};

export default Mapa;
