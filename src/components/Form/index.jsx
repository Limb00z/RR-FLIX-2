import styles from "./Form.module.css"
import { categorias} from "../Category"

export default function Form() {
    return (
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form >
                <div>
                    <label>URL do Vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select>
                        <option value="-" selected>Selecione uma categoria</option>
                        {categorias.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
            </form>
            <button>Cadastrar</button>
        </section>
    )
}