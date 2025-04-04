import React from 'react';
import './App.css';
import Produto from './Produto.jsx';
import Slide from './Slide.jsx';

const App = () => {

  const slides = [
    {
      id: "slide1",
      text: "Slide 1"
    },
    {
      id: "slide2",
      text: "Slide 2"
    },
    {
      id: "slide3",
      text: "Slide 3"
    },
  ]
  
  const [ativar, setAtivar] = React.useState(false);

  return (
    <>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto></Produto>}
      <Slide slides={slides} />
    </>
  );
};

export default App;
