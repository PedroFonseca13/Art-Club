import styled from 'styled-components'
import Background from '../../assets/img/moldura.png'
import pixelToRem from '../../utils/pxToRem'

export const Logo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  align-items: center;
  background-image: url(${Background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Main = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: calc(100vh - 56px);
  margin-top: ${pixelToRem(56)};
`

export const About = styled.div`
  padding: ${pixelToRem(20, 0)};
`

export const Services = styled.div`
  padding: ${pixelToRem(20, 0)};

  background-color: var(--button);
  color: var(--textWithe);

  .divCards {
    display: flex;
    flex-wrap: wrap;
    min-height: 650px;
    align-content: space-between;
    padding-top: ${pixelToRem(20)};
  }
`
