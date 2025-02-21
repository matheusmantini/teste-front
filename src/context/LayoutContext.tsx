import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { Repo } from "@/types/repo.types";

interface LayoutContextProps {
  username: string;
  userData: any;
  repos: Repo[];
  favoritesPage: boolean;
  loading: boolean;
  error: number | string;
  favorites: Repo[];
  handleSearch: (searchUsername: string) => Promise<void>;
  handleShowFavorites: () => void;
  handleToggleFavorite: (repo: Repo) => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<any>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [favoritesPage, setFavoritesPage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<number | string>("");
  const [favorites, setFavorites] = useState<Repo[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    storedFavorites && setFavorites(JSON.parse(storedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (favorites.length === 0 && favoritesPage) {
      setFavoritesPage(false);
    }
  }, [favorites, favoritesPage]);

  const handleSearch = async (searchUsername: string) => {
    try {
      setLoading(true);
      setError("");
      setUsername(searchUsername);

      const [userResponse, reposResponse] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_1}/users/${searchUsername}`),
        axios.get(`${process.env.NEXT_PUBLIC_1}/users/${searchUsername}/repos`),
      ]);

      setUserData(userResponse.data);
      setRepos(reposResponse.data);
    } catch (err) {
      setError(err?.status || "Erro desconhecido");
      setUserData(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleShowFavorites = () => {
    setFavoritesPage((prev) => !prev);
  };

  const handleToggleFavorite = (repo: Repo) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === repo.id)
        ? prev.filter((fav) => fav.id !== repo.id)
        : [...prev, repo]
    );
  };

  return (
    <LayoutContext.Provider
      value={{
        username,
        userData,
        repos,
        favoritesPage,
        loading,
        error,
        favorites,
        handleSearch,
        handleShowFavorites,
        handleToggleFavorite,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
