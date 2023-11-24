import { createSlice } from '@reduxjs/toolkit';

const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState: [],
  reducers: {
    addCoordinate(state, action) {
      state.push({
        latitude: Number.parseFloat(action.payload.Latitude),
        longitude: Number.parseFloat(action.payload.Longitude),
      });
    },
    removeCoordinate(state) {
      state.pop();
    },
    emptyCoordinates(state) {
      state.length = 0;
    },
  },
});

export const { addCoordinate, removeCoordinate, emptyCoordinates } = coordinatesSlice.actions;
export default coordinatesSlice.reducer;
