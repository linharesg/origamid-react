import React from 'react';
import Input from './Input';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Checkbox';

const InputComponents = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('Vermelho');
  const [frutas, setFrutas] = React.useState('Uva');
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <h2>Inputs</h2>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      {nome}
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <h2>Select</h2>
      <Select
        options={['smartphone', 'tablet', 'notebook']}
        value={produto}
        setValue={setProduto}
      />
      <h2>Radio</h2>
      <h3>Cores</h3>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h3>Frutas</h3>
      <Radio
        options={['Goiaba', 'Uva', 'Banana']}
        value={frutas}
        setValue={setFrutas}
      />
      <h2>Checkbox</h2>
      <Checkbox
        options={['Javascript', 'Ruby', 'PHP']}
        value={linguagens}
        setValue={setLinguagens}
      />
      <h4>termos</h4>
      <Checkbox
        options={['Li e aceito os termos']}
        setValue={setTermos}
        value={termos}
      />
      <button disabled={!termos.length}>Enviar</button>
    </form>
  );
};

export default InputComponents;
