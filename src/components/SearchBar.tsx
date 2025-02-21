import React, { useState } from "react";
import SearchIcon from "./icons/SearchIcon";

interface SearchProps {
  onSearch: (username: string) => void;
}

export const SearchBar: React.FC<SearchProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue.trim());
  };

  return (
    <div className="md:pl-6 lg:pl-6 flex-1">
      <form onSubmit={handleSubmit} className="relative" role="search">
        <div className="relative w-full sm:w-[668px]">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Buscar usuário"
            className="w-full pl-4 pr-10 py-3 border border-[#E3E6E9] rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-primary 
                     text-sm placeholder-gray-500"
            aria-label="Nome do usuário do GitHub"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2
                       text-gray-400 hover:text-gray-500 focus:outline-none"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};
