import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
      <GridItem area="nav" p={4}>
        <NavBar />
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
