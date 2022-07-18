import {
  Heading,
  Box,
  Text,
  Input,
  FormLabel,
  Button,
  Image,
  Flex,
  Spacer,
  Textarea,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { API_URL } from "../constants/API";

const Homepage = () => {
  const params = useParams();
  const [banner, setBanner] = useState("");

  const fetchBanner = async () => {
    //load tabel data banner here
    const response = await axios.get(
      `${API_URL}/homepage`
    );
    setBanner(response.data);

    formik.setFieldValue("title", response.data.title);
    formik.setFieldValue("description", response.data.description);
    formik.setFieldValue("image_url", response.data.image_url);
    setBanner(response.data.image_url)
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image_url: "", 
    },
    onSubmit: async () => {
      await axios.patch(`${API_URL}/homepage`, {
        title: formik.values.title,
        description: formik.values.description,
        image_url: formik.values.image_url,
      });

      alert("Banner updated!");
      fetchBanner();
    },
  });

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <>
      <Box width="40vw" marginTop={4}>
        <Heading>Homepage</Heading>
        <FormLabel marginTop={4}>Title</FormLabel>
        <Input
          value={formik.values.title}
          onChange={(event) => {
            formik.setFieldValue("title", event.target.value);
          }}
          placeholder="ketik judul banner..."
        />
        <Text fontSize="xs" color="grey">
          Caption here
        </Text>
        <FormLabel marginTop={4}>Description</FormLabel>
        <Textarea
          value={formik.values.description}
          onChange={(event) => {
            formik.setFieldValue("description", event.target.value);
          }}
          size="lg"
          placeholder="ketik deskripsi banner..."
        />
        <Button onClick={formik.handleSubmit} colorScheme="blue" marginTop={4}>
          Update Banner
        </Button>
      </Box>
      <Spacer />
      <Box width="40vw" marginTop={4}>
        <Heading>Image</Heading>
        <Image
          marginTop={4}
          boxSize="300px"
          objectFit="cover"
          src={banner}
        />
        <Input
          marginTop={4}
          value={formik.values.image_url}
          onChange={(event) => {
            formik.setFieldValue("image_url", event.target.value);
          }}
          placeholder="ketik url file image..."
        />
        <Text fontSize="xs" color="grey">
          Updated 2 days ago
        </Text>
      </Box>
      <Spacer />
    </>
  );
};

export default Homepage;
