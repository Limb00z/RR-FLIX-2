import videos from "../../json/db.json"
import styles from "./Category.module.css"

export const categorias = [
    "Animes",
    "Programação",
    "Esportes",
    "Lazer"
  ]
  
  export function filtrarCategoria(id) {
    return videos.filter( video => video.category === categorias[id])
  }

export default function Category({category,children}) {
    return (
        <section className={styles.category}>
            <h2>{category}</h2>
            <section>
               {children}
            </section>
        </section>
    )
}