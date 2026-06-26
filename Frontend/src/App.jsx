import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./pages/signUp";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/signup"} element={<SignUp />}></Route>
        <Route path={"/login"} element={<LogIn />}></Route>
      </Routes>
    </>
  );
};

export default App;
