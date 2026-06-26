import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import LogIn from "./pages/logIn";
import Home from "./pages/home";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/signup"} element={<SignUp />}></Route>
        <Route path={"/login"} element={<LogIn />}></Route>
      </Routes>
    </div>
  );
};

export default App;
