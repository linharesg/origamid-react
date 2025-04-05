import React from 'react';
import foto from './img/foto.png';
import './App.css';
import Piggy from './img/piggy-bank.svg?react';
import PiggySvg from './img/PiggySvg';

const App = () => {
  return (
    <div>
      <p className="fundo"></p>
      <Piggy />
      <PiggySvg color={'red'} />
      <img src={foto} alt="foto" />
    </div>
  );
};

export default App;
