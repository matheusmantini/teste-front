import React from "react";
import { RepoItem } from "./RepoItem";
import { Repo } from "@/types/repo.types";
import { useLayout } from "@/context/LayoutContext";

interface RepoListProps {
  colors: object;
}

export const RepoList: React.FC<RepoListProps> = ({ colors }) => {
  const { repos } = useLayout();

  if (repos.length === 0) {
    return (
      <div className="lg:col-span-1 px-4 sm:mr-6 sm:mt-6 text-left text-gray-500">
        Nenhum repositório encontrado.
      </div>
    );
  }

  return (
    <div className="lg:col-span-1  px-4 pt-4 sm:mr-6 sm:mt-6">
      <h1 className="text-primary font-semibold text-[21px] text-left mb-3">
        Repositórios
      </h1>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} colors={colors} />
      ))}
    </div>
  );
};
