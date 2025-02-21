import React from "react";
import HeartIcon from "./icons/HeartIcon";

interface FavoritesButtonProps {
  onShowFavorites?: () => void;
  isDisabled: boolean;
}

export const FavoritesButton: React.FC<FavoritesButtonProps> = ({
  onShowFavorites,
  isDisabled,
}) => {
  return (
    <div className="w-[145px] h-full">
      <button
        disabled={isDisabled}
        onClick={onShowFavorites}
        className="w-full h-full bg-primary hover:bg-primary-light disabled:bg-placeholder disabled:cursor-not-allowed transition-colors text-white font-medium text-sm flex items-center justify-center border-l border-custom-grey"
      >
        <span className="mr-2">
          <HeartIcon fillColor={"none"} />
        </span>
        Favoritos
      </button>
    </div>
  );
};
