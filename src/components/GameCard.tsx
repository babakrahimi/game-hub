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
        <Heading fontSize="xl">{game.name}</Heading>
        <Spacer />
        <HStack justifyContent="space-between" mt={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((icon) => icon.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
