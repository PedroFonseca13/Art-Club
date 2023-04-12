import styled from 'styled-components'
import pixelToRem from '../../utils/pxToRem'

export const WhatsappButton = styled.button`
  background-color: rgba(241, 241, 241, 0.8);
  border-radius: ${pixelToRem(50)};
  border: none;

  position: fixed;
  bottom: ${pixelToRem(10)};
  right: ${pixelToRem(10)};
  z-index: 100;

  svg {
    font-size: ${pixelToRem(50)};
    color: #075e54;
    padding: ${pixelToRem(10)};
  }
`
