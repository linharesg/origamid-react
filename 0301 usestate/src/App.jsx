import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Gabriel', idade: 29 });
  const [modal, setModal] = React.useState(false);
  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, sobrenome: 'linhares' });
  }

  return (
    <>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.sobrenome}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </>
  );
};

export default App;
