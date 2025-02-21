import { GameQuery } from "@/App";
import apiClient, { FetchResponse } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data)
        .catch((error) => error),
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2, // ✅ Retry twice before failing
    onError: (error) => {
      console.error("Error fetching games:", error);
    },
  });

export default useGames;
