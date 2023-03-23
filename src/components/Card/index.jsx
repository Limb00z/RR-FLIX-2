import styles from "./Card.module.css"

export default function Card() {
    return (
        <section className={styles.card}>
            <a
                href="https://www.youtube.com/watch?v=8SmUtPubCEk"
                rel="noreferrer noopener"
                target='_blank' >
                
                <img src="https://img.youtube.com/vi/8SmUtPubCEk/mqdefault.jpg" alt="Naruto/Anime" />
                
            </a>
        </section>
    );
};