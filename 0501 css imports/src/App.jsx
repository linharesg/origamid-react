import React from 'react';
import CssImport from './CssImport/CssImport';
import Title from './CssImport/Title.jsx';
import Produto from './Components/Produto.jsx';
import StyledComponents from './StyledComponents/StyledComponents.jsx';

const App = () => {
  return (
    <>
      <CssImport />
      <div className="container">
        Acabou pegando o css do componente CssImpport
      </div>
      <p>Não pegou o style do 'p' do CssImport</p>
      <h1>acabou pegando o css do Title</h1>
      <h2>h2 no App, sem conflito de css</h2>
      <Produto />
      <StyledComponents />
    </>
  );
};

export default App;
