import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Assistir from "./pages/Assistir";
import PageNotFound from "./pages/PageNotFound";
import Busca from "./pages/Busca";
import Favoritos from "./pages/Favoritos";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assistir/:id" element={<Assistir/>} />
                <Route path="/busca" element={<Busca />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}