import React from "react";
import NotFoundIcon from "./icons/NotFoundIcon";
import { SearchBar } from "./SearchBar";
import { useLayout } from "@/context/LayoutContext";

interface NotFoundProps {
  username: string;
}

export const NotFound: React.FC<NotFoundProps> = ({ username }) => {
  const { handleSearch } = useLayout();
  return (
    <div className="flex flex-col sm:items-center items-start sm:justify-center justify-start min-h-[calc(100vh-80px)] bg-white border-box">
      <div className="flex sm:mb-4 sm:hidden w-full box-border px-8 my-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="text-center container mx-auto px-8 sm:px-4 max-w-3xl flex flex-col items-center">
        <h1 className="font-semibold text-[21px] text-primary break-words max-w-80 mb-4">
          {`"${username}"`}
        </h1>

        <h2 className="font-semibold text-[21px] text-neutral-gray mb-4">
          Nenhum usuário encontrado
        </h2>
        <p className="font-normal text-[16px] text-neutral-gray mb-4">
          Verifique se a escrita está correta ou tente novamente
        </p>
        <div className="hidden sm:flex">
          <NotFoundIcon />
        </div>
      </div>
    </div>
  );
};
