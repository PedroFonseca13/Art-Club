import styled from 'styled-components'
import pixelToRem from '../../utils/pxToRem'

export const Paragraph = styled.p`
  font-size: ${pixelToRem(20)};
  font-weight: 300;
  margin: 0;
  padding: ${pixelToRem(20, 0, 0)};
`
