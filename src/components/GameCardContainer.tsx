import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <Box width="100%" borderRadius={10}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
