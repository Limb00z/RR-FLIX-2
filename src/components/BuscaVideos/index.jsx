import styles from "./BuscaVideos.module.css"
import VideoList from "../../components/VideoList"
import { useState } from "react"

//Filtrar videos por categoria ou titulo
function filtrarVideos(videos, buscaTexto) {
    return videos.filter((video) => video.category.includes(buscaTexto) || video.title.includes(buscaTexto))
}

export default function BuscaVideos({videos}) {
    
    const [buscaTexto, setBuscaTexto] = useState("Medo, desistência ou qualquer coisa inútil")
    
    const achaVideos = filtrarVideos(videos, buscaTexto)
    
    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar..."
                onChange={evento => setBuscaTexto(evento.target.value)}
            />
            <VideoList
                videos={achaVideos}
                emptyHeading={`Sem vídeos sobre "${buscaTexto}"`}
            />
        </section>
    )
}