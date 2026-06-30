import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiHistoryFill } from "react-icons/ri";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdSaveAlt } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [active, setActive] = useState("Home");
  return (
    <div
      className={`min-h-screen bg-black border-r border-b border-gray-800/40 overflow-hidden transition-all duration-300 ${
        showSidebar ? "md:w-50" : "w-0"
      }`}
    >
      <div
        className={`md:w-50 transition-transform duration-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`${showSidebar ? "translate-x-0" : "-translate-x-full"} transition-transform py-5 flex flex-col gap-5`}
        >
          <div
            className={`flex gap-7 items-center py-1 px-2 w-full rounded hover:bg-gray-800 duration-150 pl-5 cursor-pointer ${active === "Home" ? "bg-gray-700" : ""}`}
            onClick={() => setActive("Home")}
          >
            <FaHome size={25} color="white" />
            <p className={`text-white text-md hidden md:flex`}>Home</p>
          </div>

          <div
            className={`flex gap-7 items-center py-1 px-2 w-full rounded hover:bg-gray-800 duration-150 pl-5 cursor-pointer ${active === "Shorts" ? "bg-gray-700" : ""}`}
            onClick={() => setActive("Shorts")}
          >
            <SiYoutubeshorts size={25} color="white" />
            <p className="text-white text-md hidden md:flex">Shorts</p>
          </div>

          <div
            className={`flex gap-7 items-center py-1 px-2 w-full rounded hover:bg-gray-800 duration-150 pl-5 cursor-pointer ${active === "Subscription" ? "bg-gray-700" : ""}`}
            onClick={() => setActive("Subscription")}
          >
            <MdOutlineSubscriptions size={25} color="white" />
            <p className="text-white text-md hidden md:flex">Subscription</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center gap-1">
            <p className="text-white pl-5">You</p>
            <IoIosArrowForward color="white" size={17} />
          </div>

          <div
            className={`text-white flex items-center gap-7 pl-5 rounded hover:bg-gray-800 duration-150 cursor-pointer ${active === "History" ? "bg-gray-700" : ""}`}
            onClick={() => setActive("History")}
          >
            <RiHistoryFill size={25} />{" "}
            <p className="text-md px-2 py-1 hidden md:flex">History</p>
          </div>

          <div
            className={`text-white flex items-center gap-7 pl-5 rounded hover:bg-gray-800 duration-150 cursor-pointer ${active === "Playlists" ? "bg-gray-700" : ""}`}
            onClick={() => setActive("Playlists")}
          >
            <MdOutlinePlaylistPlay size={25} />
            <p className="text-md px-2 py-1 hidden md:flex">Playlists</p>
          </div>

          <div
            className={`text-white flex items-center gap-7 pl-5 rounded hover:bg-gray-800 duration-150 cursor-pointer ${active === "Save videos" ? "bg-gray-700" : ""}`}
            onClick={() => setActive("Save videos")}
          >
            <MdSaveAlt size={25} />{" "}
            <p className="text-md px-2 py-1 hidden md:flex">Save videos</p>
          </div>

          <div
            className={`text-white flex items-center gap-7 pl-5 rounded hover:bg-gray-800 duration-150 cursor-pointer ${active === "Liked videos" ? "bg-gray-700" : ""}`}
            onClick={() => setActive("Liked videos")}
          >
            <SlLike size={25} />{" "}
            <p className="text-md px-2 py-1 hidden md:flex">Liked videos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
