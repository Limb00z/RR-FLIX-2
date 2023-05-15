import styles from "./BuscaVideos.module.css"
import VideoList from "../../components/VideoList"

export default function BuscaVideos({videos}) {
    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar..."
            />
            <VideoList videos={videos} />
        </section>
    )
}