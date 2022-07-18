// import "./App.css";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

const Card = () => {
    return (
        <Flex direction="column" justifyContent="center">
            <Text
                textAlign="center"
                width="70vw"
                height="111px"
                fontWeight="600"
                fontSize="24px"
                alignSelf="center"
            >
                Membantu pengguna dalam menggunakan portal data ini, khususnya
                untuk mencari, menampilkan dan menggunakan data yang ada didalam
                portal.
            </Text>
            <Flex justifyContent="center">
                <Box
                    display="flex"
                    borderRadius="15px"
                    boxShadow="lg"
                    p={6}
                    mx={2}
                    rounded="md"
                    bg="white"
                    width="251px"
                    height="251px"
                ></Box>

                <Box
                    display="flex"
                    borderRadius="15px"
                    boxShadow="lg"
                    p={6}
                    mx={2}
                    rounded="md"
                    bg="white"
                    width="251px"
                    height="251px"
                ></Box>

                <Box
                    display="flex"
                    borderRadius="15px"
                    boxShadow="lg"
                    p={6}
                    mx={2}
                    rounded="md"
                    bg="white"
                    width="251px"
                    height="251px"
                ></Box>

                <Box
                    display="flex"
                    borderRadius="15px"
                    boxShadow="lg"
                    p={6}
                    mx={2}
                    rounded="md"
                    bg="white"
                    width="251px"
                    height="251px"
                ></Box>
            </Flex>
        </Flex>
    );
};

export default Card;
