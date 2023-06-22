import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

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

// interface FetchedGamesResponse {
//   results: Game[];
// }

const useGames = () => useData<Game>("/games");

export default useGames;
