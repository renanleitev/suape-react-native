import React, { useState } from "react";
import {View, Text} from "react-native";
import InputText from "../../../Inputs/InputText";

const ConfigCompany = () => {
    const [company, setCompany] = useState({
        Nome: "",
        Atividade: "",
        Município: "",
        Polo: "",
        Endereço: "",
        Contato: "",
        Latitude: "",
        Longitude: "",
    });

    return (
        <View>
            <Text>Empresas</Text>
            <InputText placeholder="Nome" onChange={() => {}}>

            </InputText>
        </View>
    )
}

export default ConfigCompany;