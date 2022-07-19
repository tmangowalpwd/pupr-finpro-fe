import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import apbnIcon from "../img/perumahan.png";
import apbnBg from "../img/bg-perumahan.png";
import { Button, Heading, Box, Image, Flex, Text } from "@chakra-ui/react";
import { API_URL } from "../constants/API";

const Apbn = () => {
  const [apbn, setDataAPBN] = useState([]);
  const [sectionData, setSectionData] = useState({
    banner_title: "",
    banner_image: "",
    banner_caption: "",
  });

  const fetchDataAPBN = async (req, res) => {
    try {
      const response = await axios.get(`${API_URL}/section/data`, {
        params: {
          section_type: "apbn",
        },
      });

      setDataAPBN(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSectionAPBN = async (req, res) => {
    try {
      const response = await axios.get(`${API_URL}/section/banner`, {
        params: {
          id: 3,
        },
      });

      console.log(response.data);
      setSectionData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSectionAPBN();
    fetchDataAPBN();
  }, []);

  return (
    <Flex h="548px" id="sections">
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
            <Image src={apbnIcon} alt="Dan Abramov" w="100%" />
          </Box>
          <Heading mt={5}>{sectionData.banner_title}</Heading>
          <Text color="black" mt={5}>
            {sectionData.banner_caption}
          </Text>
          <Button
            onClick={() =>
              window.open(
                "https://public.tableau.com/views/NeracaE-Monitoring_16445883684600/Home?:language=en-US&:display_count=n&:origin=viz_share_link"
              )
            }
            colorScheme="teal"
            mt={5}
            alignSelf="start"
          >
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
          {apbn.map((val) => {
            return (
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
                zIndex={2}
                marginRight={5}
                mt={5}
              >
                <Text fontSize="12px">{val.title}</Text>
                <Text fontSize="24px" fontWeight="bold">
                  {val.data_number} {val.data_unit}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <Box w="50vw" zIndex={1}>
        <Image
          position="absolute"
          right="0"
          src={sectionData.banner_image}
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

export default Apbn;

