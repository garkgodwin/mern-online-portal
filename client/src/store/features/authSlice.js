import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../api/authAPI";

//TODO: STATUS WILL LET THE MODAL POP UP CHANGE COLORS
//TODO: MODAL MUST BE ADDED FOR PRODUCTION LIKE SUCCESSFULL ACTIONS

const initialState = {
  isLoggedIn: false,
  isVerified: false,
  role: "",
  username: "",
  loading: false,
  message: "",
  status: 0,
  fromLogin: false, //set this true if from login page login
  fromLogout: false, // set this true if logout success
};

//?asyncs
export const login = createAsyncThunk("accounts/login", async (data, _) => {
  const response = await authAPI.login(data);
  return response;
});

export const verifyOnMount = createAsyncThunk(
  "accounts/verifiy-on-mount",
  async (_, __) => {
    const token = localStorage.getItem("token");
    if (
      token === null ||
      token === undefined ||
      token === "null" ||
      token === "undefined"
    ) {
      return {
        status: 100,
        message: "No token found.",
      };
    } else {
      const response = await authAPI.verifyOnMount(token);
      return response;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.role = "";
      state.username = "";
      state.message = "";
      state.status = 0;
      state.fromLogout = true;
      localStorage.clear(); // to clear token
    },
    setFromLogin: (state, action) => {
      state.fromLogout = action.payload;
    },
    setFromLogout: (state, action) => {
      state.fromLogout = action.payload;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
      state.message = "Logging in...";
      state.status = 0;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      const result = action.payload;
      if (result.status === 200) {
        //? save token to local once login is successful
        localStorage.setItem("token", result.token);
        state.isLoggedIn = true;
        state.fromLogin = true;
        state.role = result.role;
        state.username = result.username;
      }
      state.message = result.message;
      state.status = result.status;
    },
    [login.rejected]: (state, action) => {
      const result = action.payload;
      state.loading = false;
      state.message = result.message;
      state.status = result.status;
    },
    [verifyOnMount.pending]: (state, action) => {
      state.loading = true;
      state.message = "Verifying account";
      state.status = 0;
    },
    [verifyOnMount.fulfilled]: (state, action) => {
      state.loading = false;
      const result = action.payload;
      if (result.status === 200) {
        state.isLoggedIn = true;
        state.username = result.username;
        state.role = result.role;
      }
      state.status = result.status;
      state.message = result.message;
    },
    [verifyOnMount.rejected]: (state, action) => {
      const result = action.payload;
      state.loading = false;
      state.message = result.message;
      state.status = result.status;
    },
  },
});

export const authStates = (state) => state.auth;
export const { logout, setFromLogin, setFromLogout } = authSlice.actions;
export default authSlice.reducer;
