import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderButtons from "./HeaderButtons";
import { useLocation } from "react-router";
import BottomButtons from "./BottomButtons";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Header
        setShowSidebar={setShowSidebar}
        search={search}
        setSearch={setSearch}
      />
      {location.pathname === "/" && <HeaderButtons />}
      <div
        className={`min-h-screen bg-black flex ${
          location.pathname === "/" ? "pt-36" : "pt-20"
        }`}
      >
        <Sidebar
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        <BottomButtons />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
