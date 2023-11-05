import { createSlice } from '@reduxjs/toolkit';

const journeysSlice = createSlice({
  name: 'journeys',
  initialState: [],
  reducers: {
    addJourney(state, action) {
      state.push({...action.payload});
    },
    removeJourney(state) {
      state.pop();
    },
    emptyJourneys(state) {
      state.length = 0;
    },
  },
});

export const { addJourney, removeJourney, emptyJourneys } = journeysSlice.actions;
export default journeysSlice.reducer;
