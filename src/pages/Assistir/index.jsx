import styles from "./Assistir.module.css"
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"

export default function Assistir() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.assistir}>
                    <h1>Assistir a criação desse projeto</h1>
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/KsFLXOTflsM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer/>
            
        </>
    )
}