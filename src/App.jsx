import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import { Box } from "@chakra-ui/react";
import PerumahanSection from "./pages/PerumahanSection";
import SDASection from "./pages/SDASection";
import APBNSection from "./pages/APBNSection";
import SDMSection from "./pages/SDMSection";
import "./App.css";

const App = () => {
  return (
    <Box backgroundColor="#F9FAFC" minH="100vh">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="admin" element={<Sidebar />}>
          <Route path="" element={<Homepage />} />
          <Route path="section/perumahan" element={<PerumahanSection />} />
          <Route path="section/sda" element={<SDASection />} />
          <Route path="section/apbn" element={<APBNSection />} />
          <Route path="section/sdm" element={<SDMSection />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;

