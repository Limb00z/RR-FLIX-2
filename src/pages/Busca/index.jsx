import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "./Busca.module.css"

export default function Busca() {
    return (
        <>
            <Header />
            <Container>
            <section className={styles.busca}>
                <h2>teste</h2>
            </section>
            </Container>
            <Footer/>
    
        </>   
    )
       
}