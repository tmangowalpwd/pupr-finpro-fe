import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import sdmIcon from "../img/sdm.png";
import sdmBg from "../img/bg-sdm.png";
import { Button, Heading, Box, Image, Flex, Text } from "@chakra-ui/react";

const Sdm = () => {
    const [sdm, setDataSdm] = useState([]);

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
                        <Image src={sdmIcon} alt="Dan Abramov" w="100%" />
                    </Box>
                    <Heading mt={5}>SDM - Jasa Konstruksi</Heading>
                    <Text color="black" mt={5}>
                        Peningkatan kualitas dan kompetensi sumber daya manusia
                        (SDM) kontruksi terus dilakukan, hal ini sejalan dengan
                        program kerja Kementerian PUPR yang mempercepat program
                        Padat Karya Tunai (PKT) di 24 proyek Prioritas Strategis
                        Nasional (PSN), untuk itu Direktorat Jenderal Bina
                        Konstruksi selaku pembina jasa konstruksi terus berupaya
                        memberikan pelatihan/Bimbingan teknis atau Uji
                        Kompetensi secara masif SDM konstruksi di seluruh
                        Indonesia.
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
                    src={sdmBg}
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

export default Sdm;
