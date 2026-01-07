import Card from "components/Card";
import videos from "data/db.json";
import styles from "./index.module.css";

function Inicio(){
    return(
        <>
            <section className={styles.container}>
                {videos.map((video)=> {
                    return <Card {...video} key={video.id}/>
                })}
            </section>
        </>
    )
}

export default Inicio;