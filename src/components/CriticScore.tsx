import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

function CriticScore({ score }: CriticScoreProps) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
