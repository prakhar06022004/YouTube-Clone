import { useState } from "react";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { useRef } from "react";
function Signup() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [step, setStep] = useState(2);
  const [preview, setPreview] = useState("./emptyImage.png");

  const inputRef = useRef(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleStep1 = (e) => {
    e.preventDefault();

    setStep(2);
  };

  const handleImgClick = () => {
    inputRef.current.click();
  };
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen w-full flex items-start md:items-center justify-center md:p-4 ">
      {step === 1 && (
        <div className="w-full max-w-130 bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)]  rounded-2xl px-10 py-5">
          {/* Back Button */}
          <button className="flex items-center gap-3 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition">
            <FaArrowLeft />
            <span className="text-lg">Back</span>
          </button>

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
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    username: e.target.value,
                  })
                }
              />
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
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold mb-2">PASSWORD</label>

              <div className=" relative border border-gray-300 rounded-lg">
                <input
                  type={show ? "text" : "password"}
                  placeholder="At least 8 characters"
                  className="w-full px-3 py-2 text-xl outline-none focus:border-black"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                />

                <button
                  type="button"
                  className="z-100 absolute right-0 top-0 h-full px-6 border-gray-300 bg-white cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {show ? <IoMdEyeOff size={20} /> : <FaEye size={20} />}
                </button>
              </div>
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
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border border-gray-300 rounded-xl p-2 text-2xl font-medium hover:bg-[#FF0033] duration-200 hover:text-white transition cursor-pointer"
              onClick={() => setStep(2)}
            >
              Create Account
            </button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="w-full max-w-130 bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)]  rounded-2xl px-10 py-5">
          <button
            className="flex items-center gap-3 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition cursor-pointer"
            onClick={() => setStep(1)}
          >
            <FaArrowLeft />
            <span className="text-lg">Back</span>
          </button>
          <div className="flex items-center justify-center">
            <div className="relative w-20 h-20 group" onClick={handleImgClick}>
              <img
                src={preview}
                alt="emptyImg"
                className="w-20 h-20 rounded-full cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-200 cursor-pointer">
                <FaPlus size={30} color="#818181" />
              </div>
            </div>
          </div>
          <form className="mt-10 space-y-6">
            <input
              type="file"
              ref={inputRef}
              accept="image/*"
              className="hidden"
              onChange={handleImgChange}
              className="object-cover"
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default Signup;
