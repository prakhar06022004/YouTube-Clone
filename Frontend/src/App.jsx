import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import LogIn from "./pages/logIn";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/signup"} element={<SignUp />}></Route>
        <Route path={"/logIn"} element={<LogIn />}></Route>
      </Routes>
    </div>
  );
};

export default App;
