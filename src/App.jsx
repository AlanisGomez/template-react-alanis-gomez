import { useState } from 'react'
import Card from "./Components/Card";
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [character, setCharacter] = useState('')
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
  
    if (name.length < 3 || name.startsWith(' ') || character.length < 6) {
      setError(true);
      setShowCard(false);
    } else {
      setError(false);
      setShowCard(true);
    }
  };
  
  return (
    <>
    <div className="App">
      <h1>Personaje favorito de The Office</h1>
      <div className="formContainer">
        <form onSubmit={handleForm}>
          <input type="text" placeholder="Ingresá tu nombre" onBlur={(e) => setName(e.target.value)}/>
          <input type="text" placeholder="Ingresá tu personaje favorito de la serie" onBlur={(e) => setCharacter(e.target.value)}/>
          <button type="sumit">Enviar</button>
        </form>
      </div>
      {error && <p className='alert'>Por favor chequea que la información sea correcta</p>}
      {showCard && <Card name={name} character={character}/>}
    </div>
    </>
  )
}

export default App
