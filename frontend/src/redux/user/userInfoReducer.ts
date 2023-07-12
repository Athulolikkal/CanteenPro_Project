import { createSlice } from "@reduxjs/toolkit";

interface UserData {
  userId: string | undefined;
  name: string | undefined;
  email: string | undefined;
}

const initialState: UserData = {
  userId: undefined,
  name: undefined,
  email: undefined,
};

const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      return action.payload;
    },
    logout: () => {
      return undefined;
    },
  },
});

export const { addUserInfo, logout } = userInfo.actions;
export default userInfo.reducer;
