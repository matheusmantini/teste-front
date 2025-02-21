// Tipos reutilizáveis e isolados
export interface Repo {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  description: string;
  language: string;
}

export type FavoriteAction = "add" | "remove";

export interface RepoAction {
  type: FavoriteAction;
  repo: Repo;
}
