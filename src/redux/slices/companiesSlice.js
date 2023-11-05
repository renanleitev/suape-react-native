import { createSlice } from '@reduxjs/toolkit';

const companiesSlice = createSlice({
  name: 'companies',
  initialState: [],
  reducers: {
    addCompany(state, action) {
      state.push({
        id: action.payload.id,
        Nome: action.payload.Nome,
        Atividade: action.payload.Atividade,
        Município: action.payload.Município,
        Polo: action.payload.Polo,
        Endereço: action.payload.Endereço,
        Contato: action.payload.Contato,
        Latitude: action.payload.Latitude,
        Longitude: action.payload.Longitude,
      });
    },
    emptyCompanies(state) {
      state.length = 0;
    },
  },
});

export const { addCompany, emptyCompanies } = companiesSlice.actions;
export default companiesSlice.reducer;
