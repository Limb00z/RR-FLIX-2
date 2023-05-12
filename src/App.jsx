import './App.css';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Header from './components/Header';
import Container from './components/Container';
import Card from './components/Card';
import videos from "./json/db.json"
import Category from './components/Category';

const categorias = [
  "Animes",
  "Programação",
  "Esportes",
  "Lazer"
]

function filtrarCategoria(id) {
  return videos.filter( video => video.category === categorias[id])
}

function App() {
  return (
    <div>
      <Header/>
      <Banner imagem={"home"}/>
      <Container>

        {
          categorias.map((category, index) =>
            <Category category={category}>
              {filtrarCategoria(index).map((video) =>
                <Card id={video.id} key={video.id} /> )}
            </Category>
          )
        }

      </Container>
      <Footer/>
    </div>
  );
}

export default App;
