import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch.jsx';
import styles from '../modules/Produto.module.css';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import Head from '../components/Head.jsx';

const Produto = () => {
  const { id } = useParams();
  const apiUrl = 'https://ranekapi.origamid.dev/json/api/produto';
  const { data, request, loading, error } = useFetch();
  React.useEffect(() => {
    const { response, jsonResponse } = request(apiUrl + '/' + id);
  }, []);

  if (error)
    return (
      <p>
        <Head title="Produto" description="Página de produtos" />
        {JSON.stringify(error)}
      </p>
    );
  if (loading)
    return (
      <>
        <Head title="Produto" description="Página de produtos" />
        <LoadingSpinner />
      </>
    );
  if (data) {
    return (
      <section className={`${styles.produto} animeLeft`}>
        <Head title={data.nome} description="Página de produtos" />
        <div className={styles.fotos}>
          {data.fotos.map(({ src, titulo }, index) => (
            <img className={styles.foto} key={index} src={src} alt={titulo} />
          ))}
        </div>
        <div className={styles.info}>
          <h1>{data.nome}</h1>
          <p className={styles.preco}>R$ {data.preco}</p>
          <p>{data.descricao}</p>
        </div>
      </section>
    );
  }
};

export default Produto;
