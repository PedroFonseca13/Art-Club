import React from 'react'
import Load from '../../assets/img/loading-gif.gif'
import { Loader, LoaderContainer } from './styles'
import 'animate.css'

const Loading = () => {
  return (
    <LoaderContainer>
      <Loader src={ Load } />
    </LoaderContainer>
  )
}

export default Loading
