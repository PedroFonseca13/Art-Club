import React from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import BarberPoleLottie from '../../assets/LottieJson/barber.json'

const BarberPole = () => {
  const DivAnimation = styled.div`
    pointer-events: none;
    background-image: url('../../assets/img/moldura.png');
    width: 100%;
  `
  return (
    <DivAnimation>
      <Lottie className="animation" animationData={ BarberPoleLottie } />
    </DivAnimation>
  )
}
export default BarberPole
