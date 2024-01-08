import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between">
            <Text>Logo</Text>
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
