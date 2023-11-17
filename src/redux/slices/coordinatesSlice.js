import { createSlice } from '@reduxjs/toolkit';

const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState: [],
  reducers: {
    addCoordinate(state, action) {
      state.push({
        latitude: action.payload.Latitude,
        longitude: action.payload.Longitude,
      });
    },
    emptyCoordinates(state) {
      state.length = 0;
    },
  },
});

export const { addCoordinate, emptyCoordinates } = coordinatesSlice.actions;
export default coordinatesSlice.reducer;
