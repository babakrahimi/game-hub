import useGame from "@/hooks/useGame";
import {
  Box,
  Center,
  Divider,
  Heading,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <Center height="80vh">
        <Spinner size="xl" />
      </Center>
    );

  if (error || !game)
    return (
      <Center height="80vh">
        <Text fontSize="xl" color="red.500">
          Error loading game details.
        </Text>
      </Center>
    );

  return (
    <Box maxW="container.lg" mx="auto" p={6}>
      <Image
        src={game.background_image}
        alt={game.name}
        borderRadius="lg"
        mb={6}
        boxShadow="lg"
      />

      <Heading size="2xl" mb={4}>
        {game.name}
      </Heading>

      <Divider mb={6} />

      <VStack align="start" spacing={4}>
        <Text fontSize="lg" lineHeight="tall">
          {game.description_raw}
        </Text>
      </VStack>
    </Box>
  );
}

export default GameDetailPage;
