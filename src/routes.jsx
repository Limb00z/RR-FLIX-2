import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Assistir from "./pages/Assistir";
import PageNotFound from "./pages/PageNotFound";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assistir" element={<Assistir/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}