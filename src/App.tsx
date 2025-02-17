import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
      gap={4}
      p={4}
    >
      <GridItem area="nav" bg="colorPalette.50" p={4}>
        Navigation
      </GridItem>

      <GridItem area="main" bg="green.500" p={4} color="white">
        Main Content
      </GridItem>

      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        bg="gray.200"
        p={4}
      >
        Sidebar
      </GridItem>
    </Grid>
  );
}

export default App;
