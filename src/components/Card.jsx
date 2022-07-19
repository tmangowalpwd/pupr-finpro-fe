// import "./App.css";
import { Box, Container, Flex, Image, Text, Divider } from "@chakra-ui/react";
import perumahanIcon from "../img/perumahan-icon.png";
import bendunganIcon from "../img/bendungan-icon.png";
import apbnIcon from "../img/apbn-icon.png";
import sdmIcon from "../img/sdm-icon.png";

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
                <Box>
                    <Box
                        display="flex"
                        borderRadius="30px"
                        boxShadow="lg"
                        p={6}
                        mx={2}
                        // rounded="md"
                        bg="white"
                        width="251px"
                        height="251px"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            src={apbnIcon}
                            alt="Dan Abramov"
                            w="70%"
                            h="70%"
                        />
                    </Box>
                    <Text
                        textAlign="center"
                        fontWeight="600"
                        fontSize="24px"
                        mt={5}
                    >
                        Kementerian PUPR
                    </Text>
                </Box>
                <Box>
                    <Box
                        display="flex"
                        borderRadius="30px"
                        boxShadow="lg"
                        p={6}
                        mx={2}
                        // rounded="md"
                        bg="white"
                        width="251px"
                        height="251px"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            src={perumahanIcon}
                            alt="Dan Abramov"
                            w="70%"
                            h="70%"
                            justifyContent="center"
                            alignItems="center"
                        />
                    </Box>
                    <Text
                        textAlign="center"
                        fontWeight="600"
                        fontSize="24px"
                        mt={5}
                    >
                        Ditjen Perumahan
                    </Text>
                </Box>
                <Box>
                    <Box
                        display="flex"
                        borderRadius="30px"
                        boxShadow="lg"
                        p={6}
                        mx={2}
                        // rounded="md"
                        bg="white"
                        width="251px"
                        height="251px"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            src={bendunganIcon}
                            alt="Dan Abramov"
                            w="70%"
                            h="70%"
                        />
                    </Box>
                    <Text
                        textAlign="center"
                        fontWeight="600"
                        fontSize="24px"
                        mt={5}
                    >
                        Ditjen Sumber Daya Air
                    </Text>
                </Box>
                <Box>
                    <Box
                        display="flex"
                        borderRadius="30px"
                        boxShadow="lg"
                        p={6}
                        mx={2}
                        // rounded="md"
                        bg="white"
                        width="251px"
                        height="251px"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            src={sdmIcon}
                            alt="Dan Abramov"
                            w="70%"
                            h="70%"
                        />
                    </Box>
                    <Text
                        textAlign="center"
                        fontWeight="600"
                        fontSize="24px"
                        mt={5}
                    >
                        Ditjen Bina Konstruksi
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Card;
