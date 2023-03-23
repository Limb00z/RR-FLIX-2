import './App.css';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Header from './components/Header';
import Container from './components/Container';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Header/>
      <Banner imagem={"home"}/>
      <Container>
        <h2>Anime</h2>
        <section className='cards'>
          <Card id="8SmUtPubCEk"/> {/* Naruto */} 
          <Card id="gbotYhHcpYE"/> {/* Pokemon */}
          <Card id="HDLqvuethDo"/> {/* Digimon */}
          <Card id="ejdz3mgXVdY"/> {/* Dragon Ball GT */}
          <Card id="2eqJA2xN8nA"/> {/* Attack on Titan */}
        </section>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
