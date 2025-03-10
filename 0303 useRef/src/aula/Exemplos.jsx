import React from 'react'
import Notificacao from './Notificacao'

const Exemplos = () => {
    const [comentarios, setComentarios] = React.useState(['teste1', 'teste2'])
    const [input, setInput] = React.useState('')
    const inputElement = React.useRef()

    function handleClick() {
        setComentarios([...comentarios, input])
        setInput('')
        inputElement.current.focus()
    }
    
  return (
    <div>
        <ul>
            {comentarios.map((comentario, index) => (
                <li key={index}>{comentario}</li>
            ))}
        </ul>
        <input ref={inputElement} type="text" value={input} onChange={({target}) => setInput(target.value)}/>
        <button onClick={handleClick}>Enviar</button>
        <Notificacao />
    </div>
  )
}

export default Exemplos