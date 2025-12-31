import { Link } from 'react-router-dom';
import styles from './Cabecera.module.css';
import logo from "./LogoIWS.png"
import CabeceraLink from 'components/CabeceraLink/CabeceraLink';

function Cabecera() {
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContaniner}>
                    <img src={logo} alt="Logo App"/> <span>Cinema</span>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    Home
                </CabeceraLink>
                <CabeceraLink url="./Favoritos">
                    Favoritos
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera;