import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Container, Typography } from "@mui/material";

//?Components
import Navbar from "./components/navbar";

//?Pages
//*Guest pages
import GuestPages from "./pages/guest";
//*Student Pages
import StudentPages from "./pages/authed/student";
//*Instructor Pages
import InstructorPages from "./pages/authed/instructor";
//*Accountant Pages
import AccountantPages from "./pages/authed/accountant";
//*Registrar Pages
import RegistrarPages from "./pages/authed/registrar";
//*Adminstrator Pages
import AdministratorPages from "./pages/authed/administrator";
//*COMMON
import PageLoading from "./pages/_common/PageLoading";

//? Store
import {
  verifyOnMount,
  setFromLogin,
  setFromLogout,
} from "./store/features/authSlice";

function App() {
  //?hooks
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  //?states
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const fromLogin = useSelector((state) => state.auth.fromLogin);
  const fromLogout = useSelector((state) => state.auth.fromLogout);
  const role = useSelector((state) => state.auth.role);
  const status = useSelector((state) => state.auth.status);
  const message = useSelector((state) => state.auth.message);

  useEffect(() => {
    dispatch(verifyOnMount());
  }, []);

  useEffect(() => {
    if (fromLogin && isLoggedIn) {
      navigate("/", { replace: true });
      dispatch(setFromLogin(false));
    }
  }, [fromLogin, isLoggedIn]);

  useEffect(() => {
    if (fromLogout && !isLoggedIn) {
      navigate("/", { replace: true });
      dispatch(setFromLogout(false));
    }
  }, [fromLogout, isLoggedIn]);

  return (
    <Container sx={{ height: "auto", boxShadow: "none", width: 1 }}>
      <Navbar />
      {!isLoggedIn ? (
        <GuestPages />
      ) : role === "STUDENT" ? (
        <StudentPages />
      ) : role === "INSTRUCTOR" ? (
        <InstructorPages />
      ) : role === "REGISTRAR" ? (
        <RegistrarPages />
      ) : role === "ACCOUNTANT" ? (
        <AccountantPages />
      ) : role === "ADMINISTRATOR" ? (
        <AdministratorPages />
      ) : null}
      <PageLoading />
    </Container>
  );
}
export default App;
