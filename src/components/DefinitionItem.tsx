import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface DefinitionItemProps {
  term: ReactNode;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: DefinitionItemProps) => {
  return (
    <Box my={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
