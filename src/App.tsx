import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gap={4}
      p={4}
    >
      <GridItem area="nav" bg="blue.500" p={4} color="white">
        Navigation
      </GridItem>

      {showAside && (
        <GridItem area="aside" bg="gray.200" p={4}>
          Sidebar
        </GridItem>
      )}

      <GridItem area="main" bg="green.500" p={4} color="white">
        Main Content
      </GridItem>
    </Grid>
  );
}

export default App;
