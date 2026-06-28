import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="rounded w-60 flex flex-col gap-5">
      <div className="flex gap-6">
        <IoMenu color="white" size={28} />
        <div className="flex items-center gap-1">
          <img src={"/youtube.png"} alt="YTlogo" className="w-8 h-8" />

          <h1 className="text-2xl font-medium text-white">Youtube</h1>
        </div>
      </div>

      <div className="flex flex-col gap-3 pl-4">
        <div
          className={`flex gap-7 items-center py-1 px-2 w-full rounded ${active === "Home" ? "bg-gray-700" : ""}`}
          onClick={() => setActive("Home")}
        >
          <FaHome size={25} color="white" />
          <p className="text-white text-lg">Home</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 pl-4">
        <div
          className={`flex gap-7 items-center py-1 px-2 w-full rounded ${active === "Shorts" ? "bg-gray-700" : ""}`}
          onClick={() => setActive("Shorts")}
        >
          <SiYoutubeshorts size={25} color="white" />
          <p className="text-white text-lg">Shorts</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 pl-4">
        <div
          className={`flex gap-7 items-center py-1 px-2 w-full rounded ${active === "Subscription" ? "bg-gray-700" : ""}`}
          onClick={() => setActive("Subscription")}
        >
          <MdOutlineSubscriptions size={25} color="white" />
          <p className="text-white text-lg">Subscription</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
