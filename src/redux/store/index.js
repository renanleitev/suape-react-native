import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from "../slices/companiesSlice";
import journeysReducer from "../slices/journeysSlice";
import pointsReducer from "../slices/pointsSlice";
import usersReducer from "../slices/usersSlice";
import coordinatesSlice from '../slices/coordinatesSlice';

const store = configureStore({
    reducer: {
        companies: companiesReducer,
        journeys: journeysReducer,
        points: pointsReducer,
        users: usersReducer,
        coordinates: coordinatesSlice,
      }
});

export default store;