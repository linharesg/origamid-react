import React from 'react';
import styles from './Produto.module.css';

const Produto = () => {
  console.log(styles);
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p>R$2000</p>
      <button>Comprar</button>
    </div>
  );
};

export default Produto;
