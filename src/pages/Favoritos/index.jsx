import styles from "./Favoritos.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import VideoList from "../../components/VideoList";
import { useFavoritoContext } from "../../contexts/Favoritos";

export default function Favoritos() {
  
  const{ favorito} = useFavoritoContext()
  
  return (
    <>
      <Header />
      <Container>
        <section className={styles.favoritos}>
          <h2>Meus Favoritos</h2>
          {<VideoList videos={favorito} emptyHeading="Sem favoritos, por enquanto..."/>}
        </section>
      </Container>
      <Footer />
    </>
  );
}
