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
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";

const Homepage = () => {
    const params = useParams();
    const [banner, setBanner] = useState([]);

    const fetchBanner = async () => {
        //load tabel data banner here
        const response = await axios.get(
            `http://localhost:2000/products/${params.id}`
        );
        setBanner(response.data);

        formik.setFieldValue("bannerTitle", response.data.bannerTitle);
        formik.setFieldValue("bannerDesc", response.data.bannerDesc);
        formik.setFieldValue("bannerImage", response.data.bannerImage);
    };

    const formik = useFormik({
        initialValues: {
            bannerTitle: "",
            bannerDesc: "",
            bannerImage: "", //default image here
        },
        validationSchema: Yup.object({
            bannerTitle: Yup.string().required(),
            bannerDesc: Yup.string().required(),
        }),
        onSubmit: async () => {
            //load tabel data banner here
            await axios.patch(`http://localhost:2000/products/${params.id}`, {
                bannerTitle: formik.values.bannerTitle,
                bannerDesc: formik.values.bannerDesc,
                bannerImage: formik.values.bannerImage,
            });

            alert("Banner updated!");
            fetchBanner();
        },
    });

    useEffect(() => {
        fetchBanner();
    }, []);

    return (
        <div>
            <Flex>
                <Spacer />
                <Box width="40vw" marginTop={4}>
                    <Heading>Homepage</Heading>
                    <FormLabel marginTop={4}>Title</FormLabel>
                    <Input
                        value={formik.values.bannerTitle}
                        onChange={(event) => {
                            formik.setFieldValue(
                                "bannerTitle",
                                event.target.value
                            );
                        }}
                        placeholder="ketik judul banner..."
                    />
                    <Text fontSize="xs" color="grey">
                        Caption here
                    </Text>
                    <FormLabel marginTop={4}>Description</FormLabel>
                    <Textarea
                        value={formik.values.price}
                        onChange={(event) => {
                            formik.setFieldValue(
                                "bannerDesc",
                                event.target.value
                            );
                        }}
                        size="lg"
                        placeholder="ketik deskripsi banner..."
                    />
                    <Button
                        onClick={formik.handleSubmit}
                        colorScheme="blue"
                        marginTop={4}
                    >
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
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                    />
                    <Input
                        marginTop={4}
                        value={formik.values.bannerImage}
                        onChange={(event) => {
                            formik.setFieldValue(
                                "bannerImage",
                                event.target.value
                            );
                        }}
                        placeholder="ketik url file image..."
                    />
                    <Text fontSize="xs" color="grey">
                        Updated 2 days ago
                    </Text>
                </Box>
                <Spacer />
            </Flex>
        </div>
    );
};

export default Homepage;
