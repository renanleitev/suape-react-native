import { createSlice } from '@reduxjs/toolkit';

const pointsSlice = createSlice({
  name: 'companies',
  initialState: [],
  reducers: {
    addPoint(state, action) {
      state.push({
        id: action.payload.id,
        Nome: action.payload.Nome,
        Atividade: action.payload.Atividade,
        Endereço: action.payload.Endereço,
        Contato: action.payload.Contato,
        Latitude: action.payload.Latitude,
        Longitude: action.payload.Longitude,
      });
    },
    emptyPoints(state) {
      state.length = 0;
    },
  },
});

export const { addPoint, emptyPoints } = pointsSlice.actions;
export default pointsSlice.reducer;
