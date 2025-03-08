import React from 'react';
import Modal from './Modal';
import ButtonModal from './ButtonModal';
import AdicionarLi from './AdicionarLi';

const Exemplos = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Gabriel', idade: 29 });
  const [modal, setModal] = React.useState(() => {
    const ativo = window.localStorage.getItem('ativo');
    return ativo; // como não tem esse item no localStorage, retorna null
  });
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
      <AdicionarLi />
    </>
  );
};

export default Exemplos;
