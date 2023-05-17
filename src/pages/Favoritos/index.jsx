import styles from "./Favoritos.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

export default function Favoritos() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.favoritos}>
          <h2>Meus Favoritos</h2>
          Lista de Favoritos
        </section>
      </Container>
      <Footer />
    </>
  );
}
