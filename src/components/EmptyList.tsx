import EmptyIcon from "./icons/EmptyIcon";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-white hidden sm:flex">
      <div className="text-center container mx-auto px-4 max-w-3xl flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-medium text-neutral-gray mb-4">
          Procure pelo Nome ou Nome de Usuário
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Encontre os repositórios de algum usuário digitando no campo acima
        </p>
        <EmptyIcon />
      </div>
    </div>
  );
}
