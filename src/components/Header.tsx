import React from "react";
import { SearchBar } from "./SearchBar";
import { FavoritesButton } from "./FavoritesButton";
import { useLayout } from "@/context/LayoutContext";

export const Header: React.FC = () => {
  const { handleSearch, handleShowFavorites, favorites } = useLayout();
  return (
    <header className="w-full h-20 bg-white border-b border-[#E3E6E9] flex items-center justify-between hidden sm:flex">
      <SearchBar onSearch={handleSearch} />
      <FavoritesButton
        onShowFavorites={handleShowFavorites}
        isDisabled={favorites?.length === 0}
      />
    </header>
  );
};
