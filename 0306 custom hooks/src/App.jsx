import React from 'react';
import useLocalStorage from "./useLocalStorage.jsx"

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')

  function handleClick(event) {
    setProduto(event.target.innerHTML)
  }
  
  return <div>
    <button onClick={handleClick}>notebook</button>
    <button onClick={handleClick}>smartphone</button>
  </div>;
};

export default App;
