import React from "react";
import UserIcon from "./icons/UserIcon";
import HeartIcon from "./icons/HeartIcon";
import { useLayout } from "@/context/LayoutContext";

const MenuMobile = () => {
  const { handleShowFavorites, favorites } = useLayout();
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[70px] w-full bg-white border-t border-gray-200 flex items-center justify-between sm:hidden flex">
      <button className="h-full flex-1 flex items-center justify-center bg-primary transition-colors">
        <span className="text-sm font-medium text-gray-700">
          <UserIcon />
        </span>
      </button>

      <button
        className="h-full flex-1 flex items-center justify-center bg-white transition-colors"
        disabled={favorites?.length === 0}
        onClick={handleShowFavorites}
      >
        <span className="text-sm font-medium text-gray-700">
          <HeartIcon fillColor="#4E4E4E" />
        </span>
      </button>
    </div>
  );
};

export default MenuMobile;
