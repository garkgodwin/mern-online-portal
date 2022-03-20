import { Routes, Route } from "react-router-dom";
//?Context
import RequireAuth from "../../../contexts/RequireAuth";
//?Pages
import NotFound from "../../_common/NotFound"; // not-authed
import Profile from "../_common/Profile"; //authed
import Dashboard from "./Dashboard";
import Students from "./Students";
import Fees from "./Fees";

const AccountantPages = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route
        exact={true}
        path="/"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      ></Route>
      <Route
        exact={true}
        path="/students"
        element={
          <RequireAuth>
            <Students />
          </RequireAuth>
        }
      ></Route>
      <Route
        exact={true}
        path="/fees"
        element={
          <RequireAuth>
            <Fees />
          </RequireAuth>
        }
      ></Route>
      <Route
        exact={true}
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      ></Route>
    </Routes>
  );
};

export default AccountantPages;
