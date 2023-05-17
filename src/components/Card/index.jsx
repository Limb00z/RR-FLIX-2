import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconUnFavorite from "./unfavorite.png"
import iconFavorite from "./favorite.png"

export default function Card({ id }) {
  return (
    <section className={styles.card}>
      <Link to={`/assistir/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                  alt="Capa do vídeo"
                  className={styles.capa}
        />
      </Link>
          <figure className={styles.icon}>
              <img src={iconFavorite} alt="icone de coração, favorito" />
        </figure>
    </section>
  );
}
