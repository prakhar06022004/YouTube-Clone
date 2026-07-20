import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import { TbLogout } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../redux/userSlice";

const LogOut = ({ setShowLogoutPopup, showLogoutPopup }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/auth/logout",
        {},
        { withCredentials: true },
      );
      dispatch(clearUser());
      setShowLogoutPopup(false);
        navigate("/");
    
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {currentUser && showLogoutPopup && (
        <div className="relative">
          <div className="flex justify-center px-2 py-5 bg-black text-white w-50 h-fit absolute right-0 top-0 z-99">
            <span className="absolute top-8 right-5 cursor-pointer">
              <RxCross2 size={22} onClick={() => setShowLogoutPopup(false)} />
            </span>
            <div className="bg-[#212121] w-full rounded-xl shadow-lg shadow-black/50 border border-white/10 overflow-hidden py-3">
              {/* User info section */}
              <div className="flex flex-col items-center gap-2 py-5 px-4 border-b border-white/10">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-red-500 to-red-700 flex items-center justify-center text-xl font-semibold">
                  {currentUser?.username?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <p className="text-sm font-medium text-center truncate w-full">
                  {currentUser?.username || "User"}
                </p>
                <p className="text-xs text-gray-400 text-center truncate w-full">
                  {currentUser?.email || ""}
                </p>
              </div>

              {/* Logout button */}
              <div
                onClick={logOut}
                className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-white/10 transition-colors duration-150"
              >
                <TbLogout />

                <p className="text-sm font-medium">Sign out</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogOut;
