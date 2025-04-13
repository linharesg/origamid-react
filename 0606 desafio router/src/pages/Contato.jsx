import React from 'react';
import Head from '../components/Head';

const Contato = () => {
  return (
    <>
      <Head title="Contato" description="Página de contato" />
      <div className="animeLeft">
        <h1>Entre em contato</h1>
        <ul>
          <li>Endereço: Rua das ruas</li>
          <li>Numero: 234</li>
        </ul>
      </div>
    </>
  );
};

export default Contato;
