import React, { useState } from 'react';
import Map from '../../components/Map';
import ModalBottom from '../../components/ModalBottom';
import SearchButton from '../../components/Buttons/SearchButton';
import InfoButton from '../../components/Buttons/InfoButton';
import HistoryButton from '../../components/Buttons/HistoryButton';

const Mapa = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Map />
      <ModalBottom modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <HistoryButton setModalVisible={setModalVisible} />
      <InfoButton setModalVisible={setModalVisible} />
      <SearchButton setModalVisible={setModalVisible} />
    </>
  );
};

export default Mapa;
