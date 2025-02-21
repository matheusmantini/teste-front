import { useLayout } from "@/context/LayoutContext";
import { SearchBar } from "./SearchBar";

export default function EmptyStateMobile() {
  const { handleSearch } = useLayout();
  return (
    <div className="flex flex-col items-start mt-6 justify-start min-h-[calc(100vh-80px)] bg-white sm:hidden">
      <div className="text-left container mx-auto px-4 max-w-3xl flex flex-col items-left">
        <h1 className="font-semibold text-[21px] text-neutral-gray mb-4">
          Procure pelo Nome ou <br /> Nome de Usuário
        </h1>
        <p className="font-normal text-[16px] text-neutral-gray mb-4 leading-[24px]">
          Encontre os repositórios de algum usuário digitando no campo acima
        </p>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
}
