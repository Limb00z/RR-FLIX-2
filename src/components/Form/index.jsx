import styles from "./Form.module.css"
import { categorias} from "../Category"
import { useState } from "react"

export default function Form() {

    const [url, setUrl] = useState('')
    const [categoria, setCategoria] = useState('')

    function onSave(e) {
        e.preventDefault();
        console.log(url,categoria);
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