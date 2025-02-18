import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import { platform } from "os";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
          <PlatformSelector
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />
        </Box>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>

      <GridItem area="aside" display={{ base: "none", lg: "block" }} p={4}>
        <GenreList
          onSelectGenre={(genre) => setSelectedGenre(genre)}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
