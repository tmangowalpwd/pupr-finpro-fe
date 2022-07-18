import {
  Box,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaHome, FaChevronDown } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";

const Sidebar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const location = useLocation();

  return (
    <>
      <Box height="60px"></Box>
      <Flex>
        <Stack paddingX="28px" mr="28px" spacing={3}>
          <Link to="/admin">
            <HStack
              spacing="12px"
              alignItems="center"
              py="12px"
              px="16px"
              _hover={{ cursor: "pointer" }}
              backgroundColor="white"
              borderRadius="16px"
            >
              <Box backgroundColor="blue.900" px={3} py={2} borderRadius={10}>
                <Icon
                  mt="2px"
                  color="white"
                  sx={{ width: "24px", height: "24px" }}
                  as={FaHome}
                />
              </Box>
              <Text color="gray.700" fontWeight="bold">
                Homepage
              </Text>
            </HStack>
          </Link>

          <Stack
            backgroundColor="white"
            borderRadius="16px"
            width="240px"
            py="12px"
            px="16px"
          >
            <HStack
              spacing="12px"
              alignItems="center"
              justifyContent="space-between"
              mb={isOpen ? "16px" : ""}
            >
              <HStack>
                <Box backgroundColor="blue.900" px={3} py={2} borderRadius={10}>
                  <Icon
                    mt="2px"
                    color="white"
                    sx={{ width: "24px", height: "24px" }}
                    as={MdBarChart}
                  />
                </Box>
                <Text color="gray.700" fontWeight="bold">
                  Section
                </Text>
              </HStack>
              <Icon
                onClick={onToggle}
                _hover={{ cursor: "pointer" }}
                as={FaChevronDown}
              />
            </HStack>

            {isOpen && (
              <Stack spacing={4}>
                <Link to="section/perumahan">
                  <Text
                    fontWeight={
                      location.pathname.includes("perumahan") ? "bold" : ""
                    }
                  >
                    Perumahan - Rusun
                  </Text>
                </Link>
                <Link to="section/sda">
                  <Text
                    fontWeight={location.pathname.includes("sda") ? "bold" : ""}
                  >
                    SDA - Bendungan
                  </Text>
                </Link>
                <Link to="section/apbn">
                  <Text
                    fontWeight={
                      location.pathname.includes("apbn") ? "bold" : ""
                    }
                  >
                    APBN - Serapan Anggaran
                  </Text>
                </Link>
                <Link to="section/sdm">
                  <Text
                    fontWeight={location.pathname.includes("sdm") ? "bold" : ""}
                  >
                    SDM - Jasa Konstruksi
                  </Text>
                </Link>
              </Stack>
            )}
          </Stack>
        </Stack>
        <Outlet />
      </Flex>
    </>
  );
};

export default Sidebar;
