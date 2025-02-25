import useScreenshots from "@/hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface GameScreenshotsProps {
  gameId: number;
}

function GameScreenshots({ gameId }: GameScreenshotsProps) {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {data?.results.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          alt={screenshot.id.toString()}
        />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
