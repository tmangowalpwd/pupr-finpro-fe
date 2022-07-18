import {
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  FormLabel,
  Input,
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Section = () => {
  const formik = useFormik({
    initialValues: {
      captionBanner: "",
      textBanner: "",
      linkPhoto: "",
      tittleData1: "",
      valueData1: 0,
      unitData1: "",
      tittleData2: "",
      valueData2: 0,
      unitData2: "",
      tittleData3: "",
      valueData3: 0,
      unitData3: "",
      tittleData4: "",
      valueData4: 0,
      unitData4: "",
    },
    validationSchema: Yup.object({
      captionBanner: Yup.string().required(),
      textBanner: Yup.string().required(),
      linkPhoto: Yup.string().required(),
      tittleData1: Yup.string().required(),
      tittleData2: Yup.string().required(),
      tittleData3: Yup.string().required(),
      tittleData4: Yup.string().required(),
      unitData1: Yup.string().required(),
      unitData2: Yup.string().required(),
      unitData3: Yup.string().required(),
      unitData4: Yup.string().required(),
      valueData1: Yup.number().required().min(1).max(100000),
      valueData2: Yup.number().required().min(1).max(100000),
      valueData3: Yup.number().required().min(1).max(100000),
      valueData4: Yup.number().required().min(1).max(100000),
    }),
    onSubmit: async () => {
      //console.log(formik.values);
      await axios.post("", {
        productName: formik.values.productName,
        price: Number(formik.values.price),

        captionBanner: formik.values.captionBanner,
        textBanner: formik.values.textBanner,
        linkPhoto: formik.values.linkPhoto,
        tittleData1: formik.values.tittleData1,
        tittleData2: formik.values.tittleData2,
        tittleData3: formik.values.tittleData3,
        tittleData4: formik.values.tittleData4,
        unitData1: formik.values.unitData1,
        unitData2: formik.values.unitData2,
        unitData3: formik.values.unitData3,
        unitData4: formik.values.unitData4,
        valueData1: Number(formik.values.valueData1),
        valueData2: Number(formik.values.valueData2),
        valueData3: Number(formik.values.valueData3),
        valueData4: Number(formik.values.valueData4),
      });
      //   fetchProducts()
      formik.setFieldValue("captionBanner", "");
      formik.setFieldValue("textBanner", "");
      formik.setFieldValue("linkPhoto", "");
      formik.setFieldValue("tittleData1", "");
      formik.setFieldValue("tittleData2", "");
      formik.setFieldValue("tittleData3", "");
      formik.setFieldValue("tittleData4", "");
      formik.setFieldValue("unitData1", "");
      formik.setFieldValue("unitData2", "");
      formik.setFieldValue("unitData3", "");
      formik.setFieldValue("unitData4", "");
      formik.setFieldValue("valueData1", "");
      formik.setFieldValue("valueData2", "");
      formik.setFieldValue("valueData3", "");
      formik.setFieldValue("valueData4", "");
      alert("Data added");
    },
  });

  return (
    <Box px="16px" pr="32px">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <Box>
            <Heading>Section Banner</Heading>
            <Stack mt={10}>
              <Input
                placeholder="Hello"
                value={formik.values.captionBanner}
                onChange={(event) => {
                  formik.setFieldValue("captionBanner", event.target.value);
                }}
              />
              <FormLabel>This is Caption</FormLabel>
              <Textarea
                placeholder="Hello"
                size="lg"
                value={formik.values.textBanner}
                onChange={(event) => {
                  formik.setFieldValue("textBanner", event.target.value);
                }}
              />
            </Stack>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Heading>Image</Heading>
            <Stack mt={10}>
              <Input
                placeholder="Fill with Link of Image"
                value={formik.values.linkPhoto}
                onChange={(event) => {
                  formik.setFieldValue("linkPhoto", event.target.value);
                }}
              />
              <FormLabel>This is Image</FormLabel>
            </Stack>
          </Box>
        </GridItem>
      </Grid>
      <Box>
        <Heading mt="48px">Data Visualization</Heading>
        <SimpleGrid columns={3} spacing={10} mt="16px">
          <Box boxShadow="lg" p="6" rounded="md" bg="white">
            <FormLabel>Title</FormLabel>
            <Input
              mb={4}
              placeholder="Hello"
              value={formik.values.tittleData1}
              onChange={(event) => {
                formik.setFieldValue("tittleData1", event.target.value);
              }}
            />
            <FormLabel>Data</FormLabel>
            <HStack>
              <NumberInput
                width="50vw"
                value={formik.values.valueData1}
                onChange={(event) => {
                  formik.setFieldValue("valueData1", event.target.value);
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Input
                width="50vw"
                mb={4}
                placeholder="Ruas"
                value={formik.values.unitData1}
                onChange={(event) => {
                  formik.setFieldValue("unitData1", event.target.value);
                }}
              />
            </HStack>
          </Box>
          <Box boxShadow="lg" p="6" rounded="md" bg="white">
            <FormLabel>Tittle</FormLabel>
            <Input
              mb={4}
              placeholder="Hello"
              value={formik.values.tittleData2}
              onChange={(event) => {
                formik.setFieldValue("tittleData2", event.target.value);
              }}
            />
            <FormLabel>Data</FormLabel>

            <HStack>
              <NumberInput
                width="50vw"
                value={formik.values.valueData2}
                onChange={(event) => {
                  formik.setFieldValue("valueData2", event.target.value);
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Input
                width="50vw"
                mb={4}
                placeholder="Ruas"
                value={formik.values.unitData2}
                onChange={(event) => {
                  formik.setFieldValue("unitData2", event.target.value);
                }}
              />
            </HStack>
          </Box>
          <Box></Box>
          <Box boxShadow="lg" p="6" rounded="md" bg="white">
            <FormLabel>Tittle</FormLabel>
            <Input
              mb={4}
              placeholder="Hello"
              value={formik.values.tittleData3}
              onChange={(event) => {
                formik.setFieldValue("tittleData3", event.target.value);
              }}
            />
            <FormLabel>Data</FormLabel>

            <HStack>
              <NumberInput
                width="50vw"
                value={formik.values.valueData3}
                onChange={(event) => {
                  formik.setFieldValue("valueData3", event.target.value);
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Input
                width="50vw"
                mb={4}
                placeholder="Ruas"
                value={formik.values.unitData3}
                onChange={(event) => {
                  formik.setFieldValue("unitData3", event.target.value);
                }}
              />
            </HStack>
          </Box>
          <Box boxShadow="lg" p="6" rounded="md" bg="white">
            <FormLabel>Tittle</FormLabel>
            <Input
              mb={4}
              placeholder="Hello"
              value={formik.values.tittleData4}
              onChange={(event) => {
                formik.setFieldValue("tittleData4", event.target.value);
              }}
            />
            <FormLabel>Data</FormLabel>

            <HStack>
              <NumberInput
                width="50vw"
                value={formik.values.valueData4}
                onChange={(event) => {
                  formik.setFieldValue("valueData4", event.target.value);
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Input
                width="50vw"
                mb={4}
                placeholder="Ruas"
                value={formik.values.unitData4}
                onChange={(event) => {
                  formik.setFieldValue("unitData4", event.target.value);
                }}
              />
            </HStack>
          </Box>
          <Box></Box>
        </SimpleGrid>
        <Box mt={3}>
          <Button size="lg" colorScheme={"teal"} onClick={formik.handleSubmit}>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Section;
