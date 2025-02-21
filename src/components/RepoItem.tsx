import { Repo } from "@/types/repo.types";
import React from "react";
import { format } from "date-fns";
import FavoriteBtn from "./icons/FavoriteBtnIcon";
import { useLayout } from "@/context/LayoutContext";

interface RepoItemProps {
  repo: Repo;
  colors: object;
}

export const RepoItem: React.FC<RepoItemProps> = ({ repo, colors }) => {
  const { favorites, handleToggleFavorite } = useLayout();

  const formattedDate = format(new Date(repo?.updated_at), "d MMM yyyy");
  const languageColor = colors[repo?.language];

  return (
    <article className="p-4 mb-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-gray hover:underline"
            >
              {repo.name}
            </a>
          </h3>
          <p className="text-placeholder mt-1">{repo.description}</p>
          <div className="mt-2 flex items-center">
            <div
              className={`grid items-center text-sm text-gray-500 gap-2 ${
                repo.language ? "grid-cols-[150px_1fr]" : "grid-cols-1"
              }`}
            >
              {repo.language && (
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: languageColor?.color || "#ccc" }}
                  ></div>
                  <span>{repo.language}</span>
                </div>
              )}
              <span>Updated on {formattedDate}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleToggleFavorite(repo)}
          className={`text-white rounded-lg transition-colors`}
          aria-label={"botão de favoritar repositório"}
        >
          <FavoriteBtn
            isFavorite={favorites.some((fav) => fav.id === repo.id)}
          />
        </button>
      </div>
    </article>
  );
};
