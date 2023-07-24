import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameBox from "./GameBox";

//TODO - Fix the bug
//TODO - Add the sceleton for GameBox

const GamesSection = () => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGames();

  const fetchedGamesCount =
    data?.pages.reduce((total, pages) => total + pages.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<p>Fetching next page in progress --- replace with SPINNER</p>}
      >
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
      </InfiniteScroll>
    </>
  );
};

export default GamesSection;
