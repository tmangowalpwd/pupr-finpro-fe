import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";

const Hero = (props) => {
    return (
        <Flex color="white" h="768px">
            <Box flex="1" bg="#1A365D" flexDirection="column">
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    w="492"
                    h="100%"
                    justifyContent="center"
                    alignItems="start"
                    padding="150px"
                >
                    <Text fontSize="32px" fontWeight="700" lineHeight="45px">
                        {props.title}
                    </Text>
                    <Text mt={5}>{props.description}</Text>
                    <Button
                        width="69"
                        height="16"
                        marginTop="8"
                        bg="none"
                        border="solid white"
                        alignSelf="start"
                    >
                        <Text> Scroll Down</Text>
                    </Button>
                </Box>
            </Box>
            <Box flex="1" bg="tomato">
                <Image
                    objectFit="cover"
                    h="100%"
                    w="100%"
                    src={props.image}
                    alt=""
                />
            </Box>
        </Flex>
    );
};

export default Hero;
