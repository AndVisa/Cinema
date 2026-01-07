import Banner from "components/Banner";
import Cabecera from "components/Cabecera/Cabecera";
import Pie from "components/Pie";
import Titulo from "components/Titulo";
import FavoritosProvider from "context/Favoritos";
import Container from "pages/Container";
import Favoritos from "pages/Favoritos";

const { default: Inicio } = require("pages/Inicio");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecera />
            <Banner img="home" color="#154580" />
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos </h1>
            </Titulo>
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