import './App.css';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Header from './components/Header';
import Container from './components/Container';

function App() {
  return (
    <div>
      <Header/>
      <Banner imagem="home" />
      <Container>
        <h1>TESTE</h1>
        <p>teste 2 sobre toda a vida és lindo</p>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
