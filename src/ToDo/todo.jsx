import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../";
import Card from "./Componentes/Card";


export default function Todo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Listas")) || [];
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [listas, setListas] = useState(listaLocalStorage)
    const [link, setLink] = useState("")
    const [identidade, setIdentidade] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1)

    useEffect(() => { localStorage.setItem("Listas", JSON.stringify(listas)) }, [listas])

    const salvar = (salve) => {
        salve.preventDefault()
        setListas([...listas, {
            titulo: titulo,
            descricao: descricao,
            identidade: identidade,
            link: link
        }])
        setIdentidade(identidade + 1)
        setNome("")

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

            {listas.map((atv) =>
                <main key={atv.identidade}>
                    <ul >
                        <Link to={`${atv.identidade}`}>
                            <div className="card">

                                <h1>{atv.titulo}</h1>
                                <h3>{atv.descricao}</h3>

                                <iframe 
                                    width="930" 
                                    height="523"
                                    src={`https://www.youtube.com/embed/${atv.link.slice(17)}`}
                                    title= "Vídeo"
                                    frameborder={0} 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen>
                                </iframe>

                                
                            </div>
                        </Link>
                    </ul>
                </main>

            )}
            
            <footer>AAAAAA</footer>
        </div>

    );
}