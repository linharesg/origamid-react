import React from 'react';

const Select = () => {
  const [select, setSelect] = React.useState('');
  return (
    <>
      <select value={select} onChange={({target}) => setSelect(target.value)} id="produtos">
        <option disabled value="">Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select}
    </>
  );
};

export default Select;
