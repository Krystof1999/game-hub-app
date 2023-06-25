import useData from "./useData";
import { GameQuery } from "../App";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  background_image: string;
  name: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        search: gameQuery.search,
        ordering: gameQuery.ordering,
      },
    },
    [gameQuery]
  );

export default useGames;
