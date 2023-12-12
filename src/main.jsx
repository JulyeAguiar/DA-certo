import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Todo from './ToDo/todo'
import Destaques from './ToDo/destaque'
import Detalhe from './Componentes/detalhe'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destaque" element={<Destaques />}></Route>
        <Route path="/detalhe/:identidade" element={<Detalhe />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
