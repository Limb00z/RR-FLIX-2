import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Assistir from "./pages/Assistir";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assistir" element={<Assistir/>} />
            </Routes>
        </BrowserRouter>
    );
}