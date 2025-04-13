import React from 'react';
import useFetch from '../Hooks/useFetch.jsx';
import styles from '../modules/Produtos.module.css';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import Head from '../components/Head.jsx';

const Produtos = () => {
  const apiUrl = 'https://ranekapi.origamid.dev/json/api/produto';
  const [produtos, setProdutos] = React.useState(null);
  const { data, loading, request, error } = useFetch();

  const head = <Head title="Produtos" description="Página de produtos" />;

  React.useEffect(() => {
    setProdutos(() => {
      const { response, jsonResponse } = request(apiUrl, {});
    });
  }, []);

  if (error)
    return (
      <>
        {head}
        <p>{JSON.stringify(error)}</p>;<p>tste</p>
      </>
    );
  if (loading)
    return (
      <>
        {head} <LoadingSpinner />
      </>
    );
  if (data) {
    return (
      <section className={`${styles.produtos} animeLeft`}>
        {head}
        {data.map((produto) => (
          <Link
            className={styles.link}
            key={produto.id}
            to={'/produtos/' + produto.id}
          >
            <img
              className={styles.foto}
              src={produto.fotos[0].src}
              alt={produto.fotos.titulo}
            />
            <h2 className={styles.tituloProduto}>{produto.nome}</h2>
          </Link>
        ))}
      </section>
    );
  }
};

export default Produtos;
