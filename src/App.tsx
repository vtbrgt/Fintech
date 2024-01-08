import "./Style.css"
import Sidenav from "./components/Sidenav.tsx";
import Header from "./components/Header.tsx";
import Resumo from "./pages/Resumo.tsx";
import {DataContextProvider} from "./context/DataContext.tsx";
import Vendas from "./pages/Vendas.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Venda from "./pages/Venda.tsx";

function App() {

  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
