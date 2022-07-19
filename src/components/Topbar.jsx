import logo from "../img/logo.png";
import { Image, Flex } from "@chakra-ui/react";

const Topbar = () => {
    return (
        <Flex h="100px" alignItems="center">
            <Image
                objectFit="cover"
                w="25%"
                src={logo}
                alt=""
                marginLeft="15px"
            />
        </Flex>
    );
};

export default Topbar;
