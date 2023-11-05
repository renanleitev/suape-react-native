import React, { useState, useEffect } from 'react';
import Map from '../../components/Map';
import ModalBottom from '../../components/ModalBottom';
import SearchButton from '../../components/Buttons/SearchButton';
import InfoButton from '../../components/Buttons/InfoButton';
import HistoryButton from '../../components/Buttons/HistoryButton';
import SearchCompany from '../../components/Company/SearchCompany';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCompany, emptyCompanies } from '../../redux/slices/companiesSlice';
import Toast from 'react-native-toast-message';


const Mapa = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    const url = `https://api-suape.onrender.com/empresa/`;
    
    const fetchCompanies = async () => {
      try {
        dispatch(emptyCompanies());
        const response = await axios.get(url, {
          signal: abortController.signal,
        });

        if (response.status === 200) {
          response.data.forEach((company) => {
            dispatch(addCompany(company));
          })
          return;
        } else {
          throw new Error("Failed to fetch companies");
        }
      } catch (error) {
        if (abortController.signal.aborted) {
          console.log("Data fetching cancelled");
        }
      }
    };

    fetchCompanies();

    return () => abortController.abort("Data fetching cancelled");
  }, []);


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
