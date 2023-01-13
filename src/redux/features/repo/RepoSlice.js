import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRepo = createAsyncThunk(
  "repo/getRepo",
  async (username, { fulfillWithValue, rejectWithValue }) => {
    try {
      try {
        const response = await axios.get("/repos", {
          params: {
            username,
          },
        });
        return fulfillWithValue(response.data.data);
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    } catch (error) {}
  }
);

const initialState = {
  loading: false,
  error: "",
  repos: [],
};

const repoSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRepo.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getRepo.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.repos = action.payload;
    });

    builder.addCase(getRepo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default repoSlice.reducer;
