import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../Axios/axios";
import { PackageItem } from "../../types";


const getAllPackages = createAsyncThunk(
  "api/allpackags",
  ({
    pageNumber,
    menu,
    searchValue,
  }: {
    pageNumber: number;
    menu: string;
    searchValue: string;
  }) => {
    return axios
      .get(
        `/canteen/customisepackage?pagenumber=${pageNumber}&&menu=${menu}&&search=${searchValue}`
      )
      .then((response) => {
        // console.log(response?.data, "redux data");
        return response.data;
      }).catch((err)=>console.log(err))
  }
);

interface AllPackagesInitialState {
  data: PackageItem[];
  error: string;
  loading: boolean;
}

const initialState: AllPackagesInitialState = {
  data: [],
  error: "",
  loading: false,
};

const allPackagesSlice = createSlice({
  name: "allpackages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action?.payload;
      })
      .addCase(getAllPackages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPackages.rejected, (state) => {
        state.loading = false;
        state.error = "some error";
      });
  },
});

export { getAllPackages };
export default allPackagesSlice.reducer;
