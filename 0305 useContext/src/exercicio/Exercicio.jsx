import React from 'react'
import { GlobalStorage } from './GlobalContext'
import Produto from './Produto'

const Exercicio = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default Exercicio