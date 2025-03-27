import React from 'react';
import Radio from './Form/Radio';

const perguntas = [
  {
    pergunta: 'Qual é o método utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'qual é o numero 2?',
    options: ['1', '2', '3'],
    resposta: '2',
    id: 'p2',
  },
  {
    pergunta: 'qual é o numero 3?',
    options: ['3', '2', '1'],
    resposta: '3',
    id: 'p3',
  },
  {
    pergunta: 'qual é o numero 4?',
    options: ['4', '5', '6'],
    resposta: '4',
    id: 'p4',
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState(
    perguntas.reduce((acc, { id }) => {
      acc[id] = '';
      return acc;
    }, {}),
  );

  const [slide, setSlide] = React.useState(0);

  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
    console.log(target);
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResultado(`Acertou ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick(event) {
    event.preventDefault();
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <form>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          value={respostas[pergunta.id]}
          key={pergunta.id}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleClick}>Próximo</button>
      )}
    </form>
  );
};

export default App;
