import styles from "./Form.module.css"
import { categorias} from "../Category"
import { useState } from "react"

export default function Form() {

    const [url, setUrl] = useState('')
    const [categoria, setCategoria] = useState('')
    const [videos, setVideos] = useState([])
    const [errors, setErrors] = useState('')
    
    //validar url do youtube 
    function validarURl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if (!regex.test(url)) {
            setErrors("ERRO: URL inválida");
            return false
        } else {
            return url.substring(32, 43) // pegar o id do video 
            
        }
    }

    function onSave(e) {
        e.preventDefault();

         //validar categoria 
         if (!categoria || categoria === "-") {
            setErrors('Selecione uma categoria');
            return;
        } else {
            setErrors('')
        }

        //validar url do youtube    
        const urlVideo = validarURl(url)
        if (urlVideo && categoria) {
            
            //guardar a url e a categoria
            const newVideo = { url, categoria }
            setVideos([...videos, newVideo])

            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))

            //limpar o formulario
            setUrl('')
            setCategoria('')
        
        } else {
            setErrors('ERRO: Por favor, preencha todos os campos corretamente')
        }
        
       

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
                        onChange={e => setUrl(e.target.value)}
                        maxLength="43"
                        minLength="43"
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
                <div>
                    {errors}
                </div>
            </form>
            
        </section>
    )
}