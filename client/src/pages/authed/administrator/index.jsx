import { Routes, Route } from "react-router-dom";
//?Context
import RequireAuth from "../../../contexts/RequireAuth";
//?Pages
import NotFound from "../../_common/NotFound";
import Profile from "../_common/Profile";
import Dashboard from "./Dashboard";
import Accounts from "./Accounts";
import Subjects from "./Subjects";
import Employees from "./Employees";
import Students from "./Students";

const AdministratorPages = () => {
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
        path="/accounts"
        element={
          <RequireAuth>
            <Accounts />
          </RequireAuth>
        }
      ></Route>
      <Route
        exact={true}
        path="/subjects"
        element={
          <RequireAuth>
            <Subjects />
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
        path="/employees"
        element={
          <RequireAuth>
            <Employees />
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

export default AdministratorPages;
