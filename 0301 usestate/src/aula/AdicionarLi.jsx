import React from 'react';

const AdicionarLi = () => {
  const [contar, setContar] = React.useState(0);
  const [items, setItems] = React.useState([]);

  function handleClick() {
    setContar(contar => contar + 1)
    setItems(items => [...items, `Item ${contar + 1}`])
  }
  
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>{contar} Itens</button>
    </>
  );
};

export default AdicionarLi;
