// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Load list of genres from server
// const useGenres = () => useData<Genre>("/genres");

// Load list of genres locally
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
