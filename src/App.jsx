import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Homepage from "./components/Homepage";
import Section from "./components/Section";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/admin" element={<Homepage />} />
            <Route path="/admin/section" element={<Section />} />
        </Routes>
    );
};

export default App;
