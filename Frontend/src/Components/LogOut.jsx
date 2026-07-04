import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

const LogOut = ({ showLogoutPopup, userData }) => {
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/user/logout",
        {},
        { withCredentials: true },
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {userData && showLogoutPopup && (
        <div className="flex justify-center p-2 bg-black text-white w-50 h-80 absolute right-0 top-15">
          <div>
            <p
              className="bg-[#272727] py-1 px-4 rounded-2xl cursor-pointer"
              onClick={logOut}
            >
              LogOut
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LogOut;
