import React from 'react';
import useLocalStorage from './useLocalStorage.jsx';
import FetchProduct from './FetchProduct.jsx';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')

  function handleClick(event) {
    setProduto(event.target.innerHTML)
  }
  
  return <div>
    <button onClick={handleClick}>notebook</button>
    <button onClick={handleClick}>smartphone</button>
    <FetchProduct />
  </div>;
};

export default App;
