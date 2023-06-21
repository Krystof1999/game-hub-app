import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// interface FetchedPlatformsResponse {
//   results: Platform[];
// }

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
