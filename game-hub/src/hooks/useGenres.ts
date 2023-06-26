import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// interface FetchedGenresResponse {
//   results: Genre[];
// }

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
