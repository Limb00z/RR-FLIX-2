import styles from "./Form.module.css"
import { categorias} from "../Category"
import { useState } from "react"

export default function Form() {

    const [url, setUrl] = useState('')
    const [categoria, setCategoria] = useState('')
    const [videos, setVideos] = useState([])
    const [errors, setErrors]= useState('')

    function onSave(e) {
        e.preventDefault();

        //guardar a url e a categoria
        const newVideo = { url, categoria }
        setVideos([...videos, newVideo])

        localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))

        //limpar o formulario
        setUrl('')
        setCategoria('')
        
    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do Vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                        value={url}
                        onChange={e=> setUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={categoria}
                        onChange={e=> setCategoria(e.target.value)}
                    >
                        <option value="-" selected>Selecione uma categoria</option>
                        {categorias.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <button>Cadastrar</button>
            </form>
            
        </section>
    )
}