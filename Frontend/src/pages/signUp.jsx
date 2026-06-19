import { useState } from "react";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { useRef } from "react";
import axios from "axios";
function Signup() {
  const [show, setShow] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  const [step, setStep] = useState(1);

  const [preview, setPreview] = useState("./emptyImage.png");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputRef = useRef(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    image: null,
  });

  const handleStep1 = (e) => {
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

    if (formData.password !== confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Password are not matching",
        password: "Password are not matching",
      }));
      return;
    }
    setStep(2);
  };
  const handleImgClick = () => {
    inputRef.current.click();
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("username", formData.username);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("image", formData.image);

      const res = await axios.post(
        "http://localhost:8000/api/user/signup",
        data,
      );
      console.log(res?.data);
    } catch (error) {
      setStep(1);
      const { field, message } = error.response?.data;
      setError((prev) => ({
        ...prev,
        [field]: message,
      }));

      console.log(error.response?.data);
    }
  };
  return (
    <div className="min-h-screen w-full flex items-start md:items-center justify-center md:p-4 ">
      {step === 1 && (
        <div className="w-full max-w-130 bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)]  rounded-2xl px-10 py-5">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <button className="flex items-center gap-3 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition">
              <FaArrowLeft />
              <span className="text-lg">Back</span>
            </button>
            <span className="text-sm text-gray-500 font-medium">
              Step 1 of 2
            </span>
          </div>
          {/* Logo Section */}
          <div className="mt-10">
            <div className="flex items-center gap-3">
              <div className="">
                <FaYoutube color="#FF0033" size={30} />
              </div>

              <h1 className="text-3xl font-bold">YouTube</h1>
            </div>

            <p className="text-gray-600 mt-2 text-lg">
              Create your account to get started
            </p>
          </div>

          {/* Form */}
          <form className="mt-10 space-y-6" onSubmit={handleStep1}>
            {/* Username */}
            <div>
              <label className="block text-sm font-bold mb-2">USERNAME</label>

              <input
                type="text"
                placeholder="e.g. coolcreator99"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xl outline-none focus:border-black"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    username: e.target.value,
                  });

                  setError((prev) => ({
                    ...prev,
                    username: "",
                  }));
                }}
              />
              {error?.username && (
                <p className="text-red-600">{error?.username}</p>
              )}
            </div>

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
              {setFormData?.email}
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

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-bold mb-2">
                CONFIRM PASSWORD
              </label>

              <div className="relative border border-gray-300 rounded-lg">
                <div>
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Re-enter your password"
                    className="w-full px-3 py-2 text-xl outline-none focus:border-black"
                    onChange={(e) => {
                      (setConfirmPassword(e.target.value),
                        setError((prev) => ({
                          ...prev,
                          confirmPassword: "",
                        })));
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="z-100 absolute right-0 top-0 h-full px-6 border-gray-300 cursor-pointer bg-white"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <IoMdEyeOff size={20} /> : <FaEye size={20} />}
                </button>
              </div>
              {error?.confirmPassword && (
                <p className="text-red-600">{error?.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border bg-[#ff0000] text-white border-gray-300 rounded-xl p-2 text-2xl font-medium hover:bg-[#e1012e] duration-200 transition cursor-pointer"
            >
              Create Account
            </button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="w-full max-w-130 bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-2xl px-10 py-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <button
              className="flex items-center gap-3 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition cursor-pointer"
              onClick={() => setStep(1)}
            >
              <FaArrowLeft />
              <span className="text-lg">Back</span>
            </button>

            <span className="text-sm text-gray-500 font-medium">
              Step 2 of 2
            </span>
          </div>

          {/* Title */}
          <div className="text-center mt-8">
            <h2 className="text-3xl font-bold">Customize Your Channel</h2>
            <p className="text-gray-500 mt-2">
              Add a profile picture and tell people about yourself.
            </p>
          </div>

          {/* Profile Upload */}
          <div className="flex flex-col items-center mt-10">
            <div
              className="relative w-28 h-28 group cursor-pointer"
              onClick={handleImgClick}
            >
              <img
                src={preview}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-2 border-gray-200"
              />
              <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-200">
                <FaPlus size={32} color="white" />
              </div>
            </div>
            <button
              type="button"
              className="mt-4 px-5 py-2.5 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 duration-200 cursor-pointer font-medium"
              onClick={handleImgClick}
            >
              Select Picture
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Click to upload profile photo
            </p>

            <p className="text-xs text-gray-400 mt-1">
              JPG, PNG or WEBP • Max 5MB
            </p>
          </div>

          {/* Hidden Input */}
          <form className="" onSubmit={handleSubmit}>
            <input
              type="file"
              ref={inputRef}
              accept="image/*"
              className="hidden"
              onChange={handleImgChange}
            />
            <button
              type="submit"
              className="w-full bg-[#FF0033] text-white py-3 rounded-xl text-xl font-medium hover:opacity-90 duration-200 cursor-pointer mt-5 hover:bg-[#d6002b]"
            >
              Complete Setup
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Signup;
