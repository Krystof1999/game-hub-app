import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";
import { Genre } from "./useGenres";

const apiClient = new APIClient<Game>("/games");

interface Publisher {
  id: number;
  name: string;
}
export interface Game {
  background_image: string;
  name: string;
  slug: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  metacritic: number;
  genres: Genre[];
  publishers: Publisher[];
}

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],

    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          search: gameQuery.searchText,
          ordering: gameQuery.sortOrder,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
