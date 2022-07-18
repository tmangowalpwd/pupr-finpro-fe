import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import bendunganIcon from "../img/bendungan.png";
import bendunganBg from "../img/bg-bendungan.png";
import { Button, Heading, Box, Image, Flex, Text } from "@chakra-ui/react";

const Bendungan = () => {
    const [bendungan, setDataBendungan] = useState([]);

    return (
        <Flex h="548px">
            <Flex>
                <Flex
                    w="60vw"
                    direction="column"
                    justifyContent="center"
                    paddingLeft="150px"
                >
                    <Box
                        w="81px"
                        h="81px"
                        justifyContent="center"
                        alignItems="center"
                        boxShadow="lg"
                        p="6"
                        rounded="md"
                        bg="white"
                    >
                        <Image src={bendunganIcon} alt="Dan Abramov" w="100%" />
                    </Box>
                    <Heading mt={5}>SDA - Bendungan</Heading>
                    <Text color="black" mt={5}>
                        Salah satu upaya yang dilakukan oleh Pemerintah melalui
                        Direktorat Jenderal Sumber Daya Air Kementerian
                        Pekerjaan Umum dan Perumahan Rakyat dalam hal pemenuhan
                        kebutuhan air adalah pembangunan bendungan. Saat ini,
                        terdapat kurang lebih 230 bendungan di Indonesia dengan
                        daya tampung total 12,6 Milyar m3.
                    </Text>
                    <Button colorScheme="teal" mt={5} alignSelf="start">
                        Lihat Data
                    </Button>
                </Flex>
                <Flex
                    alignSelf="center"
                    mt={5}
                    alignItems="center"
                    paddingLeft="70px"
                    flexWrap="wrap"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyItems="center"
                        paddingTop={2}
                        paddingLeft={6}
                        justifyContent="center"
                        bg="white"
                        border="1px"
                        borderRadius="16px"
                        borderColor="gray.200"
                        w="274px"
                        h="90px"
                        zIndex={1}
                        marginRight={5}
                        mt={5}
                    >
                        <Text fontSize="12px">Jumlah Ruas</Text>
                        <Text fontSize="24px" fontWeight="bold">
                            40 Ruas
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyItems="center"
                        paddingTop={2}
                        paddingLeft={6}
                        justifyContent="center"
                        bg="white"
                        border="1px"
                        borderRadius="16px"
                        borderColor="gray.200"
                        w="274px"
                        h="90px"
                        zIndex={1}
                        marginRight={5}
                        mt={5}
                    >
                        <Text fontSize="12px">Panjang Jalan</Text>
                        <Text fontSize="24px" fontWeight="bold">
                            600 Km
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyItems="center"
                        paddingTop={2}
                        paddingLeft={6}
                        justifyContent="center"
                        bg="white"
                        border="1px"
                        borderRadius="16px"
                        borderColor="gray.200"
                        w="274px"
                        h="90px"
                        zIndex={1}
                        marginRight={5}
                        mt={5}
                    >
                        <Text fontSize="12px">Rata-rata Nilai Jalan</Text>
                        <Text fontSize="24px" fontWeight="bold">
                            3.73
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyItems="center"
                        paddingTop={2}
                        paddingLeft={6}
                        justifyContent="center"
                        bg="white"
                        border="1px"
                        borderRadius="16px"
                        borderColor="gray.200"
                        w="274px"
                        h="90px"
                        zIndex={1}
                        marginRight={5}
                        mt={5}
                    >
                        <Text fontSize="12px">Rata-rata Nilai VCR</Text>
                        <Text fontSize="24px" fontWeight="bold">
                            0.1842
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Box w="50vw" zIndex={-1}>
                <Image
                    position="absolute"
                    right="0"
                    src={bendunganBg}
                    alt="Dan Abramov"
                    objectFit="cover"
                    w="50%"
                    h="548px"
                    borderBottomLeftRadius="47px"
                    borderTopLeftRadius="47px"
                    justifyContent="right"
                />
            </Box>
        </Flex>
    );
};

export default Bendungan;
