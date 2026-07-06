import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./pages/signUp";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Layout from "./Components/Layout";
import Shorts from "./pages/Shorts";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shorts" element={<Shorts />} />
        </Route>
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/login"} element={<LogIn />} />
      </Routes>
    </>
  );
};

export default App;
