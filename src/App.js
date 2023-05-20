import "./App.css";
import Pages_loader from "./pages/loader_page/pages_loader.jsx";
import Login_page from "../src/conponents/login/login_page";
import Main from "./conponents/dashboard/main";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Welcome_page from "./conponents/dashboard/pages/welcome_page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index  path="/" element={<Pages_loader />} />
        <Route exact path="/login" element={<Login_page />} />
        <Route path="/dashboard/*" element={<Main />} />
        <Route index  path="/profile" element={<Welcome_page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
