import React from "react";
import { RepoList } from "../components/RepoList";
import Favorites from "../components/Favorites";
import EmptyState from "@/components/EmptyList";
import { NotFound } from "@/components/NotFoundError";
import { LoadingSpinner } from "@/components/icons/LoadingSpinner";
import UserProfile from "@/components/UserProfile";
import { GetServerSideProps } from "next";
import { useLayout } from "@/context/LayoutContext";
import EmptyStateMobile from "@/components/EmptyListMobile";
import UserProfileMobile from "@/components/UserProfileMobile";

interface Props {
  colors: Object;
}

const App: React.FC = ({ colors }) => {
  const {
    username,
    userData,
    favoritesPage,
    loading,
    error,
    favorites,
    handleToggleFavorite,
  } = useLayout();

  return (
    <div className="bg-white">
      <div className="mx-auto">
        {loading && (
          <div className="min-h-[calc(100vh-80px)] pt-20 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        )}
        {error && <NotFound username={username} />}

        {!userData &&
          !loading &&
          !error &&
          (!favoritesPage || favorites.length < 1) && (
            <>
              <EmptyState />
              <EmptyStateMobile />
            </>
          )}

        {userData && (
          <div className="flex flex-col lg:flex-row sm:gap-[50px]">
            {!(favorites.length > 0 && favoritesPage) && (
              <>
                <UserProfile userData={userData} />
                <UserProfileMobile userData={userData} />
              </>
            )}
            <div className="flex-1 space-y-[50px]">
              {(!favoritesPage || favorites.length < 1) && (
                <RepoList colors={colors} />
              )}
            </div>
          </div>
        )}

        {favorites.length > 0 && favoritesPage && <Favorites colors={colors} />}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const response = await fetch(
    "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
  );
  const responseData = await response.json();

  return {
    props: {
      colors: responseData,
    },
  };
};

export default App;
