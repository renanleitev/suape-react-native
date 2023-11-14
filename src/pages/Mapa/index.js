import React, { useState } from 'react';
import Map from '../../components/Map';
import ModalBottom from '../../components/ModalBottom';
import SearchButton from '../../components/Buttons/SearchButton';
import InfoButton from '../../components/Buttons/InfoButton';
import HistoryButton from '../../components/Buttons/HistoryButton';
import SearchCompany from '../../components/Company/SearchCompany';
import InfoCompany from '../../components/Company/InfoCompany';

const Mapa = () => {
  const [searchCompanyVisible, setSearchCompanyVisible] = useState(false);
  const [infoCompanyVisible, setInfoCompanyVisible] = useState(false);

  return (
    <>
      <Map />
      <ModalBottom
        modalVisible={searchCompanyVisible}
        setModalVisible={setSearchCompanyVisible}
      >
        <SearchCompany />
      </ModalBottom>
      <InfoCompany
        modalVisible={infoCompanyVisible}
        setModalVisible={setInfoCompanyVisible}
      />
      <HistoryButton setModalVisible={searchCompanyVisible} />
      <InfoButton setModalVisible={setInfoCompanyVisible} />
      <SearchButton setModalVisible={setSearchCompanyVisible} />
    </>
  );
};

export default Mapa;
