import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authUser = createAsyncThunk(
  "auth/authUser",
  async (username, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.get("/auth", {
        params: {
          username,
        },
      });
      return fulfillWithValue(response.data.data);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: "",
  userInfo: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(authUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = "";
      state.userInfo = action.payload;
    });

    builder.addCase(authUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
