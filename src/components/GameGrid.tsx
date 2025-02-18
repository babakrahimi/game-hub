import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/hooks/useGenres";
import { Platform } from "@/hooks/usePlatforms";

interface GameGridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: GameGridProps) {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  if (error)
    return (
      <Box
        p={4}
        bg="red.500"
        color="white"
        borderRadius="md"
        textAlign="center"
      >
        {error}
      </Box>
    );
  if (!isLoading && data.length === 0)
    return (
      <Box
        p={6}
        bg={bgColor}
        color={textColor}
        borderRadius="md"
        textAlign="center"
        fontSize="lg"
        fontWeight="bold"
      >
        No items found!
      </Box>
    );

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
