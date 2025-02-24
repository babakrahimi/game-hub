import NavBar from "@/components/NavBar";
import { Text, Heading, Box, Spacer } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box p={8}>
        <Heading>Oops...</Heading>
        <Spacer mb={3} />
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "Sorry, an unexpected error has occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
