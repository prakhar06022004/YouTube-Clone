import React from "react";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router";
import { IoSearch } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";

const Header = ({ setShowSidebar }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between p-4 items-center">
      <div className="flex items-center gap-2">
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
      <div className="flex">
        <div className="hidden md:flex justify-center items-center w-125 h-10 bg-[#121212] border border-gray-800/40 rounded-full overflow-hidden">
          <div className="w-115">
            <input
              type="search"
              placeholder="Search"
              className="text-white w-full outline-none pl-5"
            />
          </div>
          <div className="w-16 h-full bg-[#222222] flex justify-center items-center cursor-pointer">
            <IoSearch color="white" size={25} />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center h-10 w-11 rounded-full bg-[#222222] ml-2">
          <IoMdMic color="white" size={25} className="w-full" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="md:hidden w-16 h-full flex justify-center items-center cursor-pointer">
          <IoSearch color="white" size={25} />
        </div>
        <img src={"/emptyImage.png"} className="text-white w-10 h-10 rounded-full"/>
      </div>
    </div>
  );
};

export default Header;
