import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Category, {
  categorias,
  filtrarCategoria,
} from "../../components/Category";
import Carousel from "../../components/Carousel";

function Home() {
  return (
    <div>
      <Header />
      <Banner imagem={"home"} />
      <Container>
        {categorias.map((category, index) => (
          <Category category={category}>
            <Carousel>
              {filtrarCategoria(index).map((video) => (
                <Card id={video.id} key={video.id} />
              ))}
            </Carousel>
          </Category>
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
