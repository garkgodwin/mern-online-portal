import { Routes, Route } from "react-router-dom";
//?Context
import RequireAuth from "../../../contexts/RequireAuth";
//?Pages
import NotFound from "../../_common/NotFound";
import Profile from "../_common/Profile";
import Dashboard from "./Dashboard";
import Students from "./Students";
import Instructors from "./Instructors";
import Subjects from "./Subjects";

const RegistrarPages = () => {
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
        path="/instructors"
        element={
          <RequireAuth>
            <Instructors />
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

export default RegistrarPages;
