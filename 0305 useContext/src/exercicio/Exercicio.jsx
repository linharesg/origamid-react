import React from 'react'
import { GlobalStorage } from './GlobalContext'
import Produto from './Produto'
import Limpar from './Limpar'

const Exercicio = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  )
}

export default Exercicio