import {
  Button,
  Stack,
  FormLabel,
  Input,
  Box,
  Heading,
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
import { useFormik } from "formik";
import { useEffect } from "react";
import { API_URL } from "../constants/API";

const APBNSection = () => {
  const bannerFormik = useFormik({
    initialValues: {
      banner_title: "",
      banner_caption: "",
      banner_image: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.patch(API_URL + "/section/banner", {
          banner_title: values.banner_title,
          banner_caption: values.banner_caption,
          banner_image: values.banner_image,
          banner_id: 3,
        });

        alert("Updated data");
      } catch (err) {
        console.log(err);
      }
    },
  });

  const data1Formik = useFormik({
    initialValues: {
      title: "",
      data_number: 0,
      data_unit: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.patch(API_URL + "/section/data/9", {
          title: values.title,
          data_number: values.data_number,
          data_unit: values.data_unit,
        });

        alert("Updated data");
      } catch (err) {
        console.log(err);
      }
    },
  });

  const data2Formik = useFormik({
    initialValues: {
      title: "",
      data_number: 0,
      data_unit: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.patch(API_URL + "/section/data/10", {
          title: values.title,
          data_number: values.data_number,
          data_unit: values.data_unit,
        });

        alert("Updated data");
      } catch (err) {
        console.log(err);
      }
    },
  });

  const data3Formik = useFormik({
    initialValues: {
      title: "",
      data_number: 0,
      data_unit: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.patch(API_URL + "/section/data/11", {
          title: values.title,
          data_number: values.data_number,
          data_unit: values.data_unit,
        });

        alert("Updated data");
      } catch (err) {
        console.log(err);
      }
    },
  });

  const data4Formik = useFormik({
    initialValues: {
      title: "",
      data_number: 0,
      data_unit: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.patch(API_URL + "/section/data/12", {
          title: values.title,
          data_number: values.data_number,
          data_unit: values.data_unit,
        });

        alert("Updated data");
      } catch (err) {
        console.log(err);
      }
    },
  });

  const fetchBanner = async () => {
    try {
      const response = await axios.get(API_URL + "/section/banner", {
        params: {
          id: 3
        }
      })

      bannerFormik.setFieldValue("banner_title", response.data.banner_title)
      bannerFormik.setFieldValue("banner_caption", response.data.banner_caption)
      bannerFormik.setFieldValue("banner_image", response.data.banner_image)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchData1 = async () => {
    try {
      const response = await axios.get(API_URL + "/section/data", {
        params: {
          id: 9
        }
      })

      data1Formik.setFieldValue("title", response.data[0].title)
      data1Formik.setFieldValue("data_number", response.data[0].data_number)
      data1Formik.setFieldValue("data_unit", response.data[0].data_unit)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchData2 = async () => {
    try {
      const response = await axios.get(API_URL + "/section/data", {
        params: {
          id: 10
        }
      })

      data2Formik.setFieldValue("title", response.data[0].title)
      data2Formik.setFieldValue("data_number", response.data[0].data_number)
      data2Formik.setFieldValue("data_unit", response.data[0].data_unit)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchData3 = async () => {
    try {
      const response = await axios.get(API_URL + "/section/data", {
        params: {
          id: 11
        }
      })

      data3Formik.setFieldValue("title", response.data[0].title)
      data3Formik.setFieldValue("data_number", response.data[0].data_number)
      data3Formik.setFieldValue("data_unit", response.data[0].data_unit)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchData4 = async () => {
    try {
      const response = await axios.get(API_URL + "/section/data", {
        params: {
          id: 12
        }
      })

      data4Formik.setFieldValue("title", response.data[0].title)
      data4Formik.setFieldValue("data_number", response.data[0].data_number)
      data4Formik.setFieldValue("data_unit", response.data[0].data_unit)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchBanner()
    fetchData1()
    fetchData2()
    fetchData3()
    fetchData4()
  }, [])

  return (
    <Box px="16px" pr="32px">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <Box>
            <Heading>Perumahan Section Banner</Heading>
            <Stack mt={10}>
              <Input
                placeholder="Title here"
                value={bannerFormik.values.banner_title}
                onChange={(event) => {
                  bannerFormik.setFieldValue(
                    "banner_title",
                    event.target.value
                  );
                }}
              />
              <FormLabel>This is Caption</FormLabel>
              <Textarea
                placeholder="Caption here"
                size="lg"
                value={bannerFormik.values.banner_caption}
                onChange={(event) => {
                  bannerFormik.setFieldValue(
                    "banner_caption",
                    event.target.value
                  );
                }}
              />

              <Button onClick={bannerFormik.handleSubmit} mt={3} colorScheme="teal">
                Save
              </Button>
            </Stack>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Heading>Image</Heading>
            <Stack mt={10}>
              <Input
                placeholder="Fill with Link of Image"
                value={bannerFormik.values.banner_image}
                onChange={(event) => {
                  bannerFormik.setFieldValue(
                    "banner_image",
                    event.target.value
                  );
                }}
              />
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
              value={data1Formik.values.title}
              onChange={(event) => {
                data1Formik.setFieldValue("title", event.target.value);
              }}
            />
            <FormLabel>Data</FormLabel>
            <HStack>
              <NumberInput
                width="50vw"
                value={data1Formik.values.data_number}
                onChange={(event) => {
                  data1Formik.setFieldValue("data_number", event);
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
                value={data1Formik.values.data_unit}
                onChange={(event) => {
                  data1Formik.setFieldValue("data_unit", event.target.value);
                }}
              />
            </HStack>
            <Button
              mt={2}
              colorScheme={"teal"}
              onClick={data1Formik.handleSubmit}
            >
              Save
            </Button>
          </Box>
          <Box boxShadow="lg" p="6" rounded="md" bg="white">
            <FormLabel>Tittle</FormLabel>
            <Input
              mb={4}
              placeholder="Hello"
              value={data2Formik.values.title}
              onChange={(event) => {
                data2Formik.setFieldValue("title", event.target.value);
              }}
            />
            <FormLabel>Data</FormLabel>

            <HStack>
              <NumberInput
                width="50vw"
                value={data2Formik.values.data_number}
                onChange={(event) => {
                  data2Formik.setFieldValue("data_number", event);
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
                value={data2Formik.values.data_unit}
                onChange={(event) => {
                  data2Formik.setFieldValue("data_unit", event.target.value);
                }}
              />
            </HStack>
            <Button
              mt={2}
              colorScheme={"teal"}
              onClick={data2Formik.handleSubmit}
            >
              Save
            </Button>
          </Box>
          <Box></Box>
          <Box boxShadow="lg" p="6" rounded="md" bg="white">
            <FormLabel>Tittle</FormLabel>
            <Input
              mb={4}
              placeholder="Hello"
              value={data3Formik.values.title}
              onChange={(event) => {
                data3Formik.setFieldValue("title", event.target.value);
              }}
            />
            <FormLabel>Data</FormLabel>

            <HStack>
              <NumberInput
                width="50vw"
                value={data3Formik.values.data_number}
                onChange={(event) => {
                  data3Formik.setFieldValue("data_number", event);
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
                value={data3Formik.values.data_unit}
                onChange={(event) => {
                  data3Formik.setFieldValue("data_unit", event.target.value);
                }}
              />
            </HStack>
            <Button
              mt={2}
              colorScheme={"teal"}
              onClick={data3Formik.handleSubmit}
            >
              Save
            </Button>
          </Box>
          <Box boxShadow="lg" p="6" rounded="md" bg="white">
            <FormLabel>Tittle</FormLabel>
            <Input
              mb={4}
              placeholder="Hello"
              value={data4Formik.values.title}
              onChange={(event) => {
                data4Formik.setFieldValue("title", event.target.value);
              }}
            />
            <FormLabel>Data</FormLabel>

            <HStack>
              <NumberInput
                width="50vw"
                value={data4Formik.values.data_number}
                onChange={(event) => {
                  data4Formik.setFieldValue("data_number", event);
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
                value={data4Formik.values.data_unit}
                onChange={(event) => {
                  data4Formik.setFieldValue("data_unit", event.target.value);
                }}
              />
            </HStack>
            <Button
              mt={2}
              colorScheme={"teal"}
              onClick={data4Formik.handleSubmit}
            >
              Save
            </Button>
          </Box>
          <Box></Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default APBNSection;
