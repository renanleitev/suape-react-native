import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    login(state, action) {
      state.push({
        id: action.payload.id,
        Name: action.payload.Name,
        Username: action.payload.Username,
        Email: action.payload.Email,
        Password: action.payload.Password,
        Role: action.payload.Role,
        Journey: action.payload.Journey,
        isLoggedIn: true
      });
    },
    logout(state) {
      state.length = 0;
    },
  },
});

export const { login, logout, saveJourney } = usersSlice.actions;
export default usersSlice.reducer;
