import styles from "./Assistir.module.css"
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import { useParams } from "react-router-dom"
import videos from "../../json/db.json"
import PageNotFound from "../PageNotFound"

export default function Assistir() {
    
    const params = useParams();
    const video = videos.find((video) => { return video.id === params.id });
    if(!video){return <PageNotFound/>}
    
    return (
        <>
            <Header />
            <Container>
                <section className={styles.assistir}>
                    <h1>Clique para asssitir</h1>
                    <iframe
                        width="854" height="480"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </section>
            </Container>
            <Footer/>
            
        </>
    )
}