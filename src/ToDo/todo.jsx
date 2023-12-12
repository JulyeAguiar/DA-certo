import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../Componentes/Card";


export default function Todo() {
    
    const listaLocalStorage = JSON.parse(localStorage.getItem("Listas")) || [];
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [listas, setListas] = useState(listaLocalStorage)
    const [link, setLink] = useState("")
    const [identidade, setIdentidade] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1)

    useEffect(() => { localStorage.setItem("Listas", JSON.stringify(listas)) }, [listas])

const navigate = useNavigate()


    const salvar = async (salve) => {
        salve.preventDefault()
        await setListas([...listas, {
            titulo: titulo,
            descricao: descricao,
            identidade: identidade,
            link: link
        }])
        await setIdentidade(identidade + 1)
        navigate("/")

        console.log(listas)

    }



    return (
        <div>

            <form onSubmit={salvar}>

                <div className="form-container">
                    <br />
                    <h2>Insira o titulo do Vídeo:</h2>
                    <input type="text" onChange={(e) => { setTitulo(e.target.value) }}></input>

                    <h2>Insira a descrição do vídeo:</h2>
                    <input type="text" onChange={(e) => { setDescricao(e.target.value) }}></input>
                    
                    <h2>Insira a url do vídeo:</h2>
                    <input type="text" onChange={(e) => { setLink(e.target.value) }}></input>
                    <button>Enviar</button>
                </div>


            </form>


            
            <nav>
                <ul>
                    <li><a href="/todo">Cadastrar</a></li>
                    <li><a href="/">Vídeos</a></li>
                    <li><a href="/destaque">destaque</a></li>
                </ul>
            </nav>
        </div>

    );
}