import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import Card from "./Componentes/Card";


export default function Home() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Listas")) || [];
  console.log(listaLocalStorage)
  return (
    <div>

      <footer>
        <ul>
          <li><a href="/todo">Cadastrar</a></li>
          <li><a href="/">Vídeos</a></li>
        </ul>
      </footer>
      
      {listaLocalStorage.map((video) => <Card video={video} />)}

    </div>
  )


}