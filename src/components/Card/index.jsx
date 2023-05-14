import { Link } from "react-router-dom";
import styles from "./Card.module.css"

export default function Card({id}) {
    return (
        <section className={styles.card}>
            <Link to={`/assistir/${id}`}>
                            
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa do vídeo" />
                
            </Link>
        </section>
    );
};