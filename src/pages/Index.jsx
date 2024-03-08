import React from "react";
import { Box, Container, Heading, Button, Text, VStack, HStack, Image, useColorMode } from "@chakra-ui/react";
import { FaRobot, FaBrain, FaCamera, FaShieldAlt } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={5}>
        <Heading as="h1" size="2xl" textAlign="center">
          Multi-modal LAM-app
        </Heading>
        <Text as="p" fontSize="lg" textAlign="center">
          Leveraging state-of-the-art AI technologies for comprehensive digital solutions.
        </Text>

        <HStack spacing={4} justifyContent="center">
          <Button leftIcon={<FaRobot />} colorScheme="teal">
            Chatbot
          </Button>
          <Button leftIcon={<FaCamera />} colorScheme="purple">
            Computer Vision
          </Button>
          <Button leftIcon={<FaBrain />} colorScheme="orange">
            COG Architecture
          </Button>
          <Button leftIcon={<FaShieldAlt />} colorScheme="green">
            Underwriting
          </Button>
        </HStack>

        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Image src="https://images.unsplash.com/photo-1510906594845-bc082582c8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MHx8fHwxNzA5OTAzODUzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Abstract technology" borderRadius="md" />
        </Box>

        <Text as="p" fontSize="md" textAlign="center">
          Advanced algorithmic augmentation to streamline insurance coverage offers.
        </Text>

        <Button colorScheme="blue" onClick={toggleColorMode}>
          Toggle Dark Mode
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
