import React from 'react';
import Head from '../components/Head';
import foto from '../img/contato.jpg'
import styles from '../modules/Contato.module.css';

const Contato = () => {
  return (
    <>
      <Head title="Contato" description="Página de contato" />
      <section className={`${styles.contato} animeLeft`}>
        <img src={foto} alt="Tablet" />
       <div>
          <h1>Entre em contato</h1>
          <ul>
            <li>Endereço: Rua das ruas</li>
            <li>Numero: 234</li>
          </ul>
       </div>
      </section>
    </>
  );
};

export default Contato;
