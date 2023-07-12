import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "user",
  initialState:'',
  reducers: {
    isUser: (state, action) => {
      return action.payload;
    },
    logout: () => {
      return '';
    },
  },
});

export const { isUser, logout } = userDataSlice.actions;
export default userDataSlice.reducer;
