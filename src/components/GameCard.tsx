import { Game } from "@/hooks/useGames";
import getCroppedImageUrl from "@/services/image-url";
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card
      as={Link}
      to={`/games/${game.id}`}
      h="full"
      _hover={{
        transform: "scale(1.05)",
        transition: "0.2s ease-in-out",
        shadow: "lg",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      <Image
        src={getCroppedImageUrl(game.background_image)}
        borderTopRadius={10}
      />
      <CardBody display="flex" flexDirection="column">
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((icon) => icon.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Spacer />
        <Heading fontSize="xl" mt={3}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
