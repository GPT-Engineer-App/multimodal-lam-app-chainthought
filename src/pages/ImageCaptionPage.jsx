import React from "react";
import { Box, VStack, Button, Heading, Input } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const ImageCaptionPage = () => {
  const handleImageUpload = () => {};

  const handleGetCaption = () => {};

  return (
    <Box p={4}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl" textAlign="center">
          Image Captioning
        </Heading>
        <Input type="file" onChange={handleImageUpload} />
        <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleGetCaption}>
          Upload and Get Caption
        </Button>
      </VStack>
    </Box>
  );
};

export default ImageCaptionPage;
