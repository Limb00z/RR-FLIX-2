import styles from "./Form.module.css"

function Form() {
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
                    <label htmlFor=""></label>
                    <select>
                        <option value="-" selected>Selecione uma categoria</option>
                    </select>
                </div>
            </form>
        </section>
    )
}