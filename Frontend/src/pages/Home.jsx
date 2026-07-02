import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black">
      <div>
        <Header
          setShowSidebar={setShowSidebar}
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="flex py-30">
        <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

        <div className="flex-1 p-4">
          <p className="text-white">content</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
