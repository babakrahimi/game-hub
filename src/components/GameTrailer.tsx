import useTrailers from "@/hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const firstTrailer = data?.results[0];

  return (
    <video
      src={firstTrailer?.data[480]}
      poster={firstTrailer?.preview}
      controls
    />
  );
};

export default GameTrailer;
