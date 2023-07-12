import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../Axios/axios";
import { WishViewType } from "../../types";

const getUserWish = createAsyncThunk(
  "api/getuserwish",
  async ({ wishId }: { wishId: string|undefined }) => {
    try {
      const response = await axios.get(`/wish/wishitemdetails?wishId=${wishId}`);
      // console.log(response?.data);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

interface WishItemType {
  data: WishViewType[];
  error: string;
  loading: boolean;
}

const initialState: WishItemType = {
  data: [],
  error: "",
  loading: false,
};

const wishPackageView = createSlice({
  name: "wishDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserWish.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUserWish.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserWish.rejected, (state) => {
        state.loading = false;
        state.error = "error happened";
      });
  },
});

export { getUserWish };
export default wishPackageView.reducer;
