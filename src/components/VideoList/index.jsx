import styles from "./VideoList.module.css"
import Card from "../Card"

export default function VideoList({videos, emptyHeading}) {
    
    const qtdVideos = videos.length;
    let cabecalho = emptyHeading;

    if (qtdVideos > 0) {
        const pluralTexto = qtdVideos > 1 ? " vídeos " : 'vídeo'
        cabecalho = ` ${qtdVideos} ${pluralTexto}`
    };
    
    return (
        <>
            <h2>{cabecalho}</h2>
            <section className={styles.videos}>
                {videos.map((video) => <Card id={video.id} key={video.id}/>)}
            </section>
        </>
    )
    
}