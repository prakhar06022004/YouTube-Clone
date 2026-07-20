import React, { useEffect, useState } from "react";
import { IoMenu, IoSearch } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router";
import axios from "axios";
import LogOut from "./LogOut";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const Header = ({ setShowSidebar, setSearch, search }) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const { currentUser, loading } = useSelector((state) => state.user);
  console.log({
    loading,
    currentUser,
  });
  return (
    <div className="fixed top-0 w-full z-50 left-0 bg-black/70 backdrop-blur-md">
      {/* Header */}
      <div className="hidden md:flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <IoMenu
            color="white"
            size={28}
            className="cursor-pointer"
            onClick={() => setShowSidebar((prev) => !prev)}
          />

          <div
            className="flex items-center gap-1 cursor-pointer select-none"
            onClick={() => navigate("/")}
          >
            <img src="/youtube.png" className="w-8 h-8" />
            <h1 className="text-white text-2xl">Youtube</h1>
          </div>
        </div>

        <div className="flex">
          <div className="flex w-125 h-10 rounded-full overflow-hidden">
            <input
              type="search"
              placeholder="Search"
              className="flex-1 bg-[#121212] text-white px-4 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="w-16 bg-[#222222] flex justify-center items-center cursor-pointer">
              <IoSearch color="white" size={22} />
            </div>
          </div>

          <div className="ml-3 h-10 w-10 rounded-full bg-[#222222] flex justify-center items-center">
            <IoMdMic color="white" size={22} className="" />
          </div>
        </div>

        <div
          className="flex items-center justify-center cursor-pointer w-12 h-12"
          onClick={() => setShowLogoutPopup((prev) => !prev)}
        >
          {loading ? (
            <ClipLoader color="white" size={20} />
          ) : currentUser?.imageUrl ? (
            <img
              src={currentUser.imageUrl}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : currentUser?.username ? (
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white">
              <p className="text-white font-semibold">
                {currentUser.username[0].toUpperCase()}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {/* Mobile header */}
      {!active ? (
        <div className="md:hidden flex justify-between items-center p-3">
          <div className="flex items-center gap-2">
            <IoMenu
              color="white"
              size={32}
              onClick={() => setShowSidebar((prev) => !prev)}
            />

            <img
              src="/youtube.png"
              className="w-10 h-10 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          <div className="flex items-center gap-4">
            <IoSearch
              color="white"
              size={30}
              className="cursor-pointer"
              onClick={() => setActive(true)}
            />
            {loading ? (
              <ClipLoader color="white" size={20} />
            ) : (
              <div
                className="relative w-14 h-14 flex items-center justify-center cursor-pointer"
                onClick={() => setShowLogoutPopup((prev) => !prev)}
              >
                {currentUser?.imageUrl ? (
                  <img
                    src={currentUser.imageUrl}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : currentUser?.username ? (
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white">
                    <p className="text-white font-semibold">
                      {currentUser.username[0].toUpperCase()}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="md:hidden flex items-center gap-3 p-4">
          <IoArrowBack
            color="white"
            size={25}
            className="cursor-pointer"
            onClick={() => setActive(false)}
          />

          <div className="flex flex-1 h-10 rounded-full overflow-hidden">
            <input
              type="search"
              placeholder="Search"
              className="flex-1 bg-[#121212] text-white px-4 outline-none"
            />

            <div className="w-14 bg-[#222222] flex justify-center items-center">
              <IoSearch color="white" size={20} />
            </div>
          </div>
        </div>
      )}
      <LogOut
        showLogoutPopup={showLogoutPopup}
        setShowLogoutPopup={setShowLogoutPopup}
      />
    </div>
  );
};

export default Header;
