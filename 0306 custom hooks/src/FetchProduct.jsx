import React from 'react';
import useFetch from './useFetch';

const FetchProduct = () => {
  const { data, loading, request, error } = useFetch();

  React.useEffect(() => {
    const { response, jsonResponse } = request(
      'https://ranekapi.origamid.dev/json/api/produto',
      {},
    );
  }, []);

  if (error) return <p>{JSON.stringify(error)}</p>;
  if (loading) return <p>Carregando.</p>;
  if (data) {
    return data.map((produto) => (
      <div key={produto.id}>
        <h1>{produto.nome}</h1>
      </div>
    ));
  } else {
    return null;
  }
};

export default FetchProduct;
