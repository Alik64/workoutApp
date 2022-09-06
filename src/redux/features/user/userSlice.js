import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { user } = getState();

      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      };
      const { data } = await axios.get(`/auth/me`, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post("/auth/register", { name, email, password }, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/auth/login",
        { email, password },
        config
      );
      // store user's token in local storage
      localStorage.setItem("userToken", data.token);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  userInfo: null,
  userToken,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      localStorage.setItem("userToken", payload.token);
      state.userInfo = payload;
      state.userToken = payload.token;
    },
    logout: (state) => {
      localStorage.removeItem("userToken"); // deletes token from storage
      state.userInfo = null;
      state.userToken = null;
    },
  },
  // extraReducers: {
  //   [userLogin.pending]: (state) => {
  //     state.loading = true;
  //     state.error = null;
  //   },
  //   [userLogin.fulfilled]: (state, { payload }) => {
  //     state.loading = false;
  //     state.userInfo = payload;
  //     state.userToken = payload.token;
  //   },
  //   [userLogin.rejected]: (state, { payload }) => {
  //     state.loading = false;
  //     state.error = payload;
  //   },
  //   [registerUser.pending]: (state) => {
  //     state.loading = true;
  //     state.error = null;
  //   },
  //   [registerUser.fulfilled]: (state, { payload }) => {
  //     state.loading = false;
  //     state.success = true; // registration successful
  //   },
  //   [registerUser.rejected]: (state, { payload }) => {
  //     state.loading = false;
  //     state.error = payload;
  //   },
  //   [getUserDetails.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [getUserDetails.fulfilled]: (state, { payload }) => {
  //     state.loading = false;
  //     state.userInfo = payload;
  //   },
  //   [getUserDetails.rejected]: (state, { payload }) => {
  //     state.loading = false;
  //   },
  // },
});
export const { logout, loginUser } = userSlice.actions;
export default userSlice.reducer;
