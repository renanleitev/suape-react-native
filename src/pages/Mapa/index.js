import React, { useState } from 'react';
import Map from '../../components/Map';
import ModalBottom from '../../components/ModalBottom';
import SearchButton from '../../components/Buttons/SearchButton';
import InfoButton from '../../components/Buttons/InfoButton';
import HistoryButton from '../../components/Buttons/HistoryButton';
import SearchCompany from '../../components/Company/SearchCompany';
import InfoCompany from '../../components/Company/InfoCompany';
import HistoryJourney from '../../components/Journey/HistoryJourney';

const Mapa = () => {
  const [searchCompanyVisible, setSearchCompanyVisible] = useState(false);
  const [infoCompanyVisible, setInfoCompanyVisible] = useState(false);
  const [historyCompanyVisible, setHistoryCompanyVisible] = useState(false);

  return (
    <>
      <Map />
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
      <HistoryButton setModalVisible={setHistoryCompanyVisible} />
      <InfoButton setModalVisible={setInfoCompanyVisible} />
      <SearchButton setModalVisible={setSearchCompanyVisible} />
    </>
  );
};

export default Mapa;
