import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface GameGridProps {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: GameGridProps) {
  const { data, error, isLoading } = useGames(gameQuery);
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
        {error.message}
      </Box>
    );
  if (!isLoading && data?.results.length === 0)
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
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
