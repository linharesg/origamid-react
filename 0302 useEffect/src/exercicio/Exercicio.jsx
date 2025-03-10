import React from 'react';
import Botoes from './Botoes';
import Produto from './Produto';

const Exercicio = () => {
  const products = [
    {
      nome: 'smartphone',
      link: 'https://ranekapi.origamid.dev/json/api/produto/smartphone',
    },
    {
      nome: 'notebook',
      link: 'https://ranekapi.origamid.dev/json/api/produto/notebook',
    },
  ];

  const [productData, setProductData] = React.useState(null);
  const [produto, setProduto] = React.useState(
    window.localStorage.getItem('produto')
  );

  async function fetchApi(url) {
    const response = await fetch(url);
    if (response.status !== 200) {
      console.log(response);
      return null;
    }
    return await response.json();
  }

  async function updateProductData() {
    const productData = await fetchApi(
      products.find((product) => product.nome === produto).link,
    );
    setProductData(productData);
  }

  React.useEffect(() => {
    if (produto) {
      window.localStorage.setItem('produto', produto);
      updateProductData();
    } 
  }, [produto]);

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <Botoes
        products={products}
        setProduct={setProduto}
        setProductData={setProductData}
      />
      {productData && <Produto productData={productData} />}
    </div>
  );
};

export default Exercicio;
