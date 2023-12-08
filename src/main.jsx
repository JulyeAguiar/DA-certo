import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Todo from './ToDo/todo'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />}>Pinoia</Route>
        <Route path="/" element={<Home />}>Pinoia</Route>
        {/* // <Route path="/detalhe:identidade" element={<Detalhe />}>Pinoia</Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
