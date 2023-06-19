import { useEffect, useState } from "react";
import apiClient from "../assets/services/api-client";
import { CanceledError } from "axios";

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
}

interface FetchedGamesResponse {
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchedGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, isLoading, error };
};

export default useGames;
