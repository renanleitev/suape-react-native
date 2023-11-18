import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push({
        id: action.payload.id,
        Nome: action.payload.Nome,
        Username: action.payload.Username,
        Email: action.payload.Email,
        
      });
    },
    emptyUsers(state) {
      state.length = 0;
    },
  },
});

export const { addCompany, emptyCompanies } = usersSlice.actions;
export default usersSlice.reducer;
