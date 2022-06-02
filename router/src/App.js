import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";

function App() {
  const [usuariLogeado, setUsuarioLogeado] = useState({
    nombre: 'Nicolas',
    pass:'123',
    saludo: "¿Como va?",
  });

  return (
    <div className="App-header">
      <BrowserRouter>
        <Navigation setUsuario={setUsuarioLogeado} usuariLogeado={usuariLogeado}/>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <h1>404</h1>
              </>
            }
          />
          <Route 
          path="/" 
          element={<Home usuariLogeado={usuariLogeado} />} />
          <Route
            path="about"
            element={<About usuariLogeado={usuariLogeado} />}
          />
        </Routes>
        <h1>Esto es el footer</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
