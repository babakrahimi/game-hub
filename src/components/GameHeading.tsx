import { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import useGenres from "@/hooks/useGenres";
import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: GameHeadingProps) {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
}

export default GameHeading;
