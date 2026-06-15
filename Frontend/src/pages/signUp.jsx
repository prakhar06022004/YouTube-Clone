import { useState } from "react";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

function Signup() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="w-full max-w-130 bg-white border border-gray-200 rounded-2xl p-10">
        {/* Back Button */}
        <button className="flex items-center gap-3 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition">
          <FaArrowLeft />
          <span className="text-lg">Back</span>
        </button>

        {/* Logo Section */}
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-6 bg-red-600 rounded flex items-center justify-center text-white text-xs">
              ▶
            </div>

            <h1 className="text-4xl font-medium">YouTube</h1>
          </div>

          <p className="text-gray-600 mt-2 text-lg">
            Create your account to get started
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-bold mb-2">USERNAME</label>

            <input
              type="text"
              placeholder="e.g. coolcreator99"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-xl outline-none focus:border-black"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-xl outline-none focus:border-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-bold mb-2">PASSWORD</label>

            <div className=" relative border border-gray-300 rounded-lg">
              <input
                type={show ? "text" : "password"}
                placeholder="At least 8 characters"
                className="w-full px-4 py-3 text-xl outline-none focus:border-black"
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
                  className="w-90 px-4 py-3 text-xl outline-none focus:border-black"
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
            className="w-full border border-gray-300 rounded-xl py-4 text-2xl font-medium hover:bg-gray-50 transition cursor-pointer"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
