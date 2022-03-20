import { Routes, Route } from "react-router-dom";
//?Contexts
import RequireAuth from "../../../contexts/RequireAuth";
//?Pages
import NotFound from "../../_common/NotFound";
import Profile from "../_common/Profile";
import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Subjects from "./Subjects";
import Resources from "./Resources";

const InstructorPages = () => {
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
        path="/schedule"
        element={
          <RequireAuth>
            <Schedule />
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
        path="/resources"
        element={
          <RequireAuth>
            <Resources />
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

export default InstructorPages;
