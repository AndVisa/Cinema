import Cabecera from "components/Cabecera/Cabecera";
import Pie from "components/Pie";
import FavoritosProvider from "context/Favoritos";
import Container from "components/Container";
import Favoritos from "pages/Favoritos";

const { default: Inicio } = require("pages/Inicio");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecera />
            <Container>
                <FavoritosProvider>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/Favoritos" element={<Favoritos />}></Route>
                </Routes>
                </FavoritosProvider>
            </Container>
            <Pie />
        </BrowserRouter>
    )
}

export default AppRoutes;