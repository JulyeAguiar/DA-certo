import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

import Card from "./Componentes/Card";


export default function Home() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Listas")) || [];
  console.log(listaLocalStorage)
  return (
    
    <div>

      <nav>
        <ul>
          <li><a href="/todo">Cadastrar</a></li>
          <li><a href="/">Vídeos</a></li>
          <li><a href="/destaque">destaque</a></li>
        </ul>
      </nav>
      
      {listaLocalStorage.map((video) => <Card video={video} />)}

    </div>
  )


}