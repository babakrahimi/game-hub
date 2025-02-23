import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
      p={4}
    >
      <GridItem area="nav" p={4}>
        <NavBar />
      </GridItem>

      <GridItem area="main" p={4} color="white">
        <Box mb={4}>
          <GameHeading />
        </Box>
        <HStack mb={6}>
          <Box mr={1}>
            <PlatformSelector />
          </Box>
          <Box>
            <SortSelector />
          </Box>
        </HStack>
        <GameGrid />
      </GridItem>

      <GridItem area="aside" display={{ base: "none", lg: "block" }} p={4}>
        <GenreList />
      </GridItem>
    </Grid>
  );
}

export default App;
