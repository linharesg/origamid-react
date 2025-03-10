import React from 'react';

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const Exemplos = () => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  // const valor = operacaoLenta();
  const t2 = performance.now() - t1;
  console.log(t2);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  return (
    <>
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};

export default Exemplos;
