import React from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import ArrowDownLottie from '../../assets/LottieJson/gray-down-arrows.json'

const ArrowDown = () => {
  const DivAnimation = styled.div`
    pointer-events: none;
  `
  return (
    <DivAnimation>
      <Lottie animationData={ ArrowDownLottie } />
    </DivAnimation>
  )
}

export default ArrowDown
