import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "./Busca.module.css"
import videos from "../../json/db.json"
import BuscaVideos from "../../components/BuscaVideos"

export default function Busca() {
    return (
        <>
            <Header />
            <Container>
            <section className={styles.busca}>
                    <h2>Pesquisar </h2>
                    <BuscaVideos videos={videos} />
            </section>
            </Container>
            <Footer/>
    
        </>   
    )
       
}