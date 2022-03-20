import { Routes, Route } from "react-router-dom";
//?Pages
import NotFound from "../_common/NotFound";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";

const GuestPages = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default GuestPages;
