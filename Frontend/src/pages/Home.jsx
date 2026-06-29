import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="flex gap-6">
        <IoMenu
          color="white"
          size={28}
          onClick={() => setShowSidebar((prev) => !prev)}
          className="cursor-pointer"
        />
        <div
          className="flex items-center gap-1 cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          <img src={"/youtube.png"} alt="YTlogo" className="w-8 h-8" />

          <h1 className="text-2xl font-medium text-white">Youtube</h1>
        </div>
      </div>
      <div>
        <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      </div>
    </div>
  );
};

export default Home;
