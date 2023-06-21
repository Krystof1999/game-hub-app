import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchedPlatformsResponse {
  results: Platform[];
}

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchedPlatformsResponse>("/platforms/lists/parents", {
        signal: controller.signal,
      })
      .then((res) => {
        setPlatforms(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { platforms, isLoading, error };
};

export default usePlatforms;
