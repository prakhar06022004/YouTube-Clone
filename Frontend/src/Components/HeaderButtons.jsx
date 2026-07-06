import React, { useState } from "react";
import { useLocation } from "react-router";

const HeaderButtons = () => {
  const [active, setActive] = useState("All");
  const location = useLocation();

  const headerButtons = [
    "All",
    "Gaming",
    "Music",
    "Movies",
    "TV Shows",
    "News",
    "Trending",
    "Entertainment",
    "Education",
    "Science & Tech",
    "Travel",
    "Fashion",
    "Cooking",
    "Sports",
    "Pets",
    "Art",
    "Comedy",
    "Vlogs",
  ];
  return (
    <>
      {location.pathname === "/" && (
        <div className="w-full text-white whitespace-nowrap overflow-x-auto hide-scrollbar">
          <div className="flex gap-3 px-2 py-2 w-max">
            {headerButtons.map((btn, i) => (
              <div
                className={`px-2 py-1 rounded-lg cursor-pointer shrink-0 text-md ${active === btn ? "bg-white text-gray-950" : "bg-[#272727] text-white"}`}
                key={i}
                onClick={() => setActive(btn)}
              >
                {btn}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderButtons;
