import { createSlice } from "@reduxjs/toolkit";

export interface Token {
  
  canteenAccessToken: string | undefined;
  canteenRefreshToken: string | undefined;
}

const initialState: Token = {
  canteenAccessToken: undefined,
  canteenRefreshToken: undefined,
};

const canteenTokens = createSlice({
  name: "canteenTokens",
  initialState,
  reducers: {
    addCanteenTokens: (state, action) => {
      return action.payload;
    },
    canteenLogout: () => {
      return initialState;
    },
  },
});

export const { addCanteenTokens, canteenLogout } = canteenTokens.actions;
export default canteenTokens.reducer;
