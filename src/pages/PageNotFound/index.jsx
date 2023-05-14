import styles from "./PageNotFound.module.css";
import erro404 from "./404.png";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PageNotFound() {
    return (
        <>
            <Header />
            <section className={styles.container}>
                <h2>Ops! Conteúdo não localizado</h2>
                <img src={erro404} alt="imagem de erro"/>
            </section>
            <Footer/>
        </>
        
    );
}