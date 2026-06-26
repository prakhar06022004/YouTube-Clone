import { useRef, useState } from "react";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  console.log("LOGIN COMPONENT LOADED");
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      setError((prev) => ({
        ...prev,
        email: "Email cannot be empty",
      }));
      return;
    }
    if (!formData.password.trim()) {
      setError((prev) => ({
        ...prev,
        password: "Password cannot be empty",
      }));
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/api/user/login", {
        email: formData.email,
        password: formData.password,
      });

      navigate("/");

      console.log(res?.data);
    } catch (error) {
      const { field, message } = error.response?.data;
      setError((prev) => ({
        ...prev,
        [field]: message,
      }));

      console.log(error.response?.data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen w-full flex items-start md:items-center justify-center md:p-4 ">
      <div className="w-full max-w-130 bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)]  rounded-2xl px-10 py-5">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <button
            className="flex items-center gap-3 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition"
            onClick={() => navigate("/signup")}
          >
            <FaArrowLeft />
            <span className="text-lg">Back</span>
          </button>
        </div>
        {/* Logo Section */}
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <div className="">
              <FaYoutube color="#FF0033" size={30} />
            </div>

            <h1 className="text-3xl font-bold">YouTube</h1>
          </div>

          <p className="text-gray-600 mt-2 text-lg">Login Your Account </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-bold mb-2">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xl outline-none focus:border-black"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
                setError((prev) => ({
                  ...prev,
                  email: "",
                }));
              }}
            />
            {error?.email && <p className="text-red-600">{error?.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-bold mb-2">PASSWORD</label>

            <div className=" relative border border-gray-300 rounded-lg">
              <input
                type={show ? "text" : "password"}
                placeholder="At least 8 characters"
                className="w-full px-3 py-2 text-xl outline-none focus:border-black"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  });
                  setError((prev) => ({
                    ...prev,
                    password: "",
                  }));
                }}
              />

              <button
                type="button"
                className="z-100 absolute right-0 top-0 h-full px-6 border-gray-300 bg-white cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? <IoMdEyeOff size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {error?.password && (
              <p className="text-red-600">{error?.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full border bg-[#ff0000] text-white border-gray-300 rounded-xl p-2 text-2xl font-medium hover:bg-[#e1012e] duration-200 transition cursor-pointer"
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
