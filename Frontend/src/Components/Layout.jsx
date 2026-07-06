import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black flex py-30">
      <div>
        <Header
          setShowSidebar={setShowSidebar}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <Outlet />
    </div>
  );
};

export default Layout;
