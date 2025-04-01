import React from 'react';
import styled from 'styled-components';

const Teste = styled.h1`
  font-size: 2rem;
  color: yellow;
`;

const Preco = styled.p`
  background-color: ${({ cor }) => cor};
  border: solid 2px hsl(${Math.random() * 360}, 100%, 50%);
`;

const Comprar = styled.button`
  background-color: ${({ ativo }) => (ativo ? '#000' : '#fff')};
  color: ${({ ativo }) => (!ativo ? '#000' : '#fff')};
  &:hover {
    background-color: tomato;
  }
`;

const StyledComponents = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <>
      <Teste>
        Meu titulo com styled component
        <Preco cor="purple">cor</Preco>
        <Comprar ativo={ativo} onClick={handleClick}>
          Comprar
        </Comprar>
      </Teste>
      ;
    </>
  );
};

export default StyledComponents;
