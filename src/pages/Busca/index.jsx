import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import VideoList from "../../components/VideoList"
import styles from "./Busca.module.css"
import videos from "../../json/db.json"

export default function Busca() {
    return (
        <>
            <Header />
            <Container>
            <section className={styles.busca}>
                    <h2>Pesquisar </h2>
                    <VideoList videos={videos} />
            </section>
            </Container>
            <Footer/>
    
        </>   
    )
       
}