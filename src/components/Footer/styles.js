import styled from 'styled-components'
import pixelToRem from '../../utils/pxToRem'

export const FooterComponent = styled.footer`
  padding: ${pixelToRem(30, 0)};
`

export const DivFlex = styled.div`
  display: flex;
  gap: ${pixelToRem(20)};
  flex-direction: column;

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) { 
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const FooterTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 300;
`

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pixelToRem(20)};

  ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
  }

  p.hour {
    padding-left: ${pixelToRem(10)};
  }

  li>p:first-child {
    text-transform: uppercase;
    font-weight: 300;
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pixelToRem(20)};

  ul {
    display: flex;
    justify-content: space-between;
    gap: ${pixelToRem(10)};
    padding-top: ${pixelToRem(10)};
    margin-bottom: 0;
  }

  li {
    text-align: center;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--textWithe)
  }

  svg {
    font-size: ${pixelToRem(32)};
  }
`

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pixelToRem(20)};

  p {
    font-weight: 300;
  }

  address>p:nth-child(2){
    display: none;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) { 
    address {
      display: flex;
      gap: ${pixelToRem(10)};
    }

    address>p:nth-child(2){
      display: inline;
    }
  }
`
