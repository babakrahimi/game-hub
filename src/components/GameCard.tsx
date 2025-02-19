import { Game } from "@/hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card h="full">
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
