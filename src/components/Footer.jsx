import logo from "../img/logo.png";
import { Image, Flex, Box, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex h="60px" alignItems="center" bg="#374774">
            <Text
                textAlign="center"
                w="100%"
                ontSize="32px"
                fontWeight="bold"
                color="#ffffff"
            >
                Hak Cipta @ 2022 Kementerian Pekerjaan Umum dan Perumahan
                Rakyat. All Rights Reserved
            </Text>
        </Flex>
    );
};

export default Footer;
