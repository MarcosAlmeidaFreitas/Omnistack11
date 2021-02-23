import { useState } from 'react';
import Header from './Header'

function App() {
  const [counter, setCounter] = useState(0);

  function increments(){
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <div>
      <Header>Contador:{counter}</Header>
      <button onClick={increments}>Incrementar</button>
    </div>
  );
}

export default App;
