import styles from "./Pie.module.css"
import logo from "./LogoIWS.png"

function Pie() {
    return (<footer className={styles.pie}>
        <h2>Desarrollado por <img src={logo} alt="IWS" /></h2>
    </footer>)

}
export default Pie;