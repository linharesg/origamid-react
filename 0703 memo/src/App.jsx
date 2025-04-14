import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Produto from './Produto';

const App = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Header />
      <button onClick={() => setContar(contar + 1)}>Contar: {contar}</button>
      <Produto />
      <Footer />
    </div>
  );
};

export default App;
