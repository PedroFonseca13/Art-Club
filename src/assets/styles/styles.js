import styled from 'styled-components'
import pixelToRem from '../../utils/pxToRem'
import { motion } from 'framer-motion'

export const Title = styled.h1`
  font-size: ${pixelToRem(64)};
  font-weight: 400;
`

export const Subtitle = styled(motion.h2)`
  font-size: ${pixelToRem(30)};
  font-weight: 300;
  text-transform: uppercase;

  span {
    background: var(--button);
    color: var(--textWithe);
    padding: 0 5px;
    display: inline-block;
    margin-left: ${pixelToRem(5)};
  }
`

export const Button = styled.button`
  background-color: var(--button);
  color: var(--textWith);
  width: ${pixelToRem(264)};
  height: ${pixelToRem(62)};
  border: none;
  border-radius: ${pixelToRem(6)};
  font-size: ${pixelToRem(32)};
`

export const DivFlex = styled.div`
  margin: 0 auto;
  width: ${pixelToRem(100)};
`
