import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  background_image: string;
  name: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  metacritic: number;
}

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
// genres: gameQuery.genre?.id,
// platforms: gameQuery.platform?.id,
// search: gameQuery.search,
// ordering: gameQuery.ordering,
//       },
//     },
//     [gameQuery]
//   );

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],

    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          search: gameQuery.search,
          ordering: gameQuery.ordering,
        },
      }),
  });
};

export default useGames;
