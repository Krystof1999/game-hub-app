import React from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameBox from "./GameBox";
import GameBoxSkeleton from "./GameBoxSkeleton";

//TODO - Fix the bug
//TODO - Add the sceleton for GameBox

interface Props {
  gameQuery: GameQuery;
}

const GamesSection = ({ gameQuery }: Props) => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGames(gameQuery);

  return (
    <>
      <div className="grid grid-cols-4">
        {/* {!isLoading
          ? data?.results.map((game) => <GameBox key={game.name} game={game} />)
          : data?.results.map((game) => <GameBoxSkeleton key={game.name} />)} */}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameBox key={game.name} game={game}></GameBox>
            ))}
          </React.Fragment>
        ))}
      </div>
      {hasNextPage && (
        <button className="bg-red-200" onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </>
  );
};

export default GamesSection;
