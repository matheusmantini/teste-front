import React from "react";
import { RepoItem } from "@/components/RepoItem";
import { useLayout } from "@/context/LayoutContext";

interface FavoritesProps {
  colors: object;
}

const Favorites: React.FC<FavoritesProps> = ({ colors }) => {
  const { favorites } = useLayout();

  return (
    <div className="space-y-4 flex flex-col items-center">
      <h1 className="text-primary font-semibold text-[21px] text-center mt-6 mb-3">
        Meus Favoritos
      </h1>
      <div className="w-[896px]">
        {favorites.map((repo) => (
          <RepoItem key={repo.id} repo={repo} colors={colors} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
