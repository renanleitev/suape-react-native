import React, { useState } from 'react';
import Map from '../../components/Map';
import ModalBottom from '../../components/ModalBottom';
import SearchButton from '../../components/Buttons/SearchButton';
import InfoButton from '../../components/Buttons/InfoButton';
import HistoryButton from '../../components/Buttons/HistoryButton';
import SearchCompany from '../../components/Company/SearchCompany';


const Mapa = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Map />
      <ModalBottom modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <SearchCompany />
      </ModalBottom>
      <HistoryButton setModalVisible={setModalVisible} />
      <InfoButton setModalVisible={setModalVisible} />
      <SearchButton setModalVisible={setModalVisible} />
    </>
  );
};

export default Mapa;
