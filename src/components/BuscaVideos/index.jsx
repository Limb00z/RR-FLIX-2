import styles from "./BuscaVideos.module.css"
import VideoList from "../../components/VideoList"
import { useEffect, useState } from "react"
import Loader from "../Loader"

//Filtrar videos por categoria ou titulo
function filtrarVideos(videos, buscaTexto) {
    return videos.filter((video) => video.category.includes(buscaTexto) || video.title.includes(buscaTexto))
}

export default function BuscaVideos({videos}) {
    
    const [buscaTexto, setBuscaTexto] = useState("Medo, desistência ou qualquer coisa inútil")
    
    const achaVideos = filtrarVideos(videos, buscaTexto)

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    },[])
    

    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar..."
                onChange={evento => setBuscaTexto(evento.target.value)}
            />
            {
                loading ? <Loader /> :
                    <VideoList
                        videos={achaVideos}
                        emptyHeading={`Sem vídeos sobre "${buscaTexto}"`}
                    />
            }
        </section>
    )
}