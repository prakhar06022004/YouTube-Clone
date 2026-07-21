import React, { useState } from "react";
import { IoHome, IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { IoAddCircle } from "react-icons/io5";
import { MdSubscriptions, MdOutlineSubscriptions } from "react-icons/md";
import { IoPersonCircle, IoPersonCircleOutline } from "react-icons/io5";

const BottomButtons = () => {
  const [active, setActive] = useState("Home");

  const navItems = [
    {
      name: "Home",
      activeIcon: <IoHome size={24} />,
      icon: <IoHomeOutline size={24} />,
    },
    {
      name: "Shorts",
      activeIcon: <SiYoutubeshorts size={22} />,
      icon: <SiYoutubeshorts size={22} />,
    },
    {
      name: "create",
      isCreate: true,
    },
    {
      name: "Subscriptions",
      activeIcon: <MdSubscriptions size={24} />,
      icon: <MdOutlineSubscriptions size={24} />,
    },
    {
      name: "You",
      activeIcon: <IoPersonCircle size={26} />,
      icon: <IoPersonCircleOutline size={26} />,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0f0f0f] border-t border-neutral-800 flex items-center justify-around py-2 px-1 z-50 md:hidden">
      {navItems.map((item) =>
        item.isCreate ? (
          <button
            key={item.name}
            className="flex items-center justify-center text-white hover:opacity-80 active:scale-95 transition-transform"
          >
            <IoAddCircle size={34} className="text-neutral-200" />
          </button>
        ) : (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className="flex flex-col items-center justify-center gap-1 min-w-14 active:scale-95 transition-transform"
          >
            <span
              className={
                active === item.name ? "text-white" : "text-neutral-400"
              }
            >
              {active === item.name ? item.activeIcon : item.icon}
            </span>
            <span
              className={`text-[11px] ${
                active === item.name
                  ? "text-white font-medium"
                  : "text-neutral-400"
              }`}
            >
              {item.name}
            </span>
          </button>
        ),
      )}
    </div>
  );
};

export default BottomButtons;
