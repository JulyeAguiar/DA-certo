import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Card from "./Componentes/Card";


export default function Home() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Listas")) || [];
     
      return(
        <div>
            <header>
                <h1></h1>
            </header>

            <nav>

            </nav>

            <Link to="/todo">URL</Link>
            {listaLocalStorage.map((video)=> <Card video = {video}/>)}
        </div>
      )


}