import styles from "./Header.module.css"
import { Link } from "react-router-dom";


export default function Header(){
  return(
    <header className={styles.header}>
      <Link to={"/"}>
        <span>RR Flix</span>
      </Link>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/assistir"}>Assistir</Link>
        <Link to={"/busca"}>Pesquisar</Link>
        <Link to={"/favoritos"}>Favoritos</Link>
      </nav>
    </header>
  );
};