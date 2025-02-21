import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { Box, Button, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

interface GameGridProps {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: GameGridProps) {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
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

  const noItemsFound =
    !isLoading && data?.pages.every((page) => page.results.length === 0);

  if (noItemsFound)
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
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Box display="flex" justifyContent="center" mt={6}>
          <Button onClick={() => fetchNextPage()} width="100%">
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        </Box>
      )}
    </>
  );
}

export default GameGrid;
