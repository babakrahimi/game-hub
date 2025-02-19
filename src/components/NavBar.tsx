import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavbarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavbarProps) => {
  return (
    <HStack>
      <Image src={logo} alt="Logo" boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
