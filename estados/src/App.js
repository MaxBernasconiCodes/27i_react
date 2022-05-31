import logo from "./logo.svg";
import "./App.css";
import Componente from "./Componente";
import { useState } from "react";

function App() {
  const [nombreNuevo, setNombreNuevo] = useState('');
  const [apellidoNuevo, setApllidoNuevo] = useState('');
  const [usuarios, setUsuarios] = useState([
    {
      name: "Max",
      lastName: "Bernas",
    },
    { name: "Alvaro", lastName: "Jotar" },
  ]);

  const accionar = () => {
    let usuarioNuevo =
      {
        name:nombreNuevo,
        lastName: apellidoNuevo
      };
    setUsuarios([...usuarios, usuarioNuevo]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input 
        type={'text'} 
        onChange={(e)=>{setNombreNuevo(e.target.value)}} 
        value={nombreNuevo} 
        placeholder="Nombre"/>

        <input 
        type={'text'} 
        onChange={(e)=>{setApllidoNuevo(e.target.value)}} 
        value={apellidoNuevo}
        placeholder="Apellido"/>
         <button onClick={accionar}>Agregar</button>
        {usuarios.map((usuario) => {
          return <Componente name={usuario.name} lastName={usuario.lastName} />;
        })}
      </header>
    </div>
  );
}

export default App;
