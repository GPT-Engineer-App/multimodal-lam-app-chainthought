import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ImageCaptionPage from "./pages/ImageCaptionPage.jsx";
import { Box, Button } from "@chakra-ui/react";
import { FaImage } from "react-icons/fa";

function App() {
  return (
    <Router>
      <Box p={4}>
        <Link to="/">
          <Button colorScheme="blue" mr={2}>
            Home
          </Button>
        </Link>
        <Link to="/image-caption">
          <Button leftIcon={<FaImage />} colorScheme="purple">
            Image Captioning
          </Button>
        </Link>
      </Box>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/image-caption" element={<ImageCaptionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
