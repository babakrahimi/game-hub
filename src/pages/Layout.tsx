import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <Box p={8}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
