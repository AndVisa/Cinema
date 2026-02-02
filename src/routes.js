import Cabecera from "components/Cabecera/Cabecera";
import Pie from "components/Pie";
import FavoritosProvider from "context/Favoritos";
import Container from "components/Container";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import NotFound from "pages/NotFound";

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
                    <Route path="/:id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                </FavoritosProvider>
            </Container>
            <Pie />
        </BrowserRouter>
    )
}

export default AppRoutes;