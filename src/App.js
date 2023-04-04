
import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import FreeCodeLogo from "./imgs/fcc_primary_large.jpeg";
import {useState} from 'react';
import {evaluate} from 'mathjs';


function App() {

  const [input, setIput] = useState('')

  const agregarInput = val => {
    setIput(input + val)
  }

  const calcularResultado = () => {
    if(input){
      setIput(evaluate(input))
    }
    else{
      alert('Por favor ingrese un caracter para el cálculo')
    }
  }


  return (
    <div className="App">
      <div className="freecode-logo-contenedor">
        <img 
        src={FreeCodeLogo}
        className="freecode-img"
        alt="logo de freecode"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className='fila' >
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila' >
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila' >
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila' >
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila' >
          <BotonClear manejarClear={() => setIput('')} >Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
