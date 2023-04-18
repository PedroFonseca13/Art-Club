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

  height: calc(100vh - 80px);
  margin-top: ${pixelToRem(56)};

  @media (min-width: 768px) {
    max-width: 60%;
    margin: 0 auto;
  height: calc(100vh - 56px);
  }
`

export const About = styled.div`
  padding: ${pixelToRem(20, 0)};
  
  img.profile {
    width: 100%;  
    border: 2px solid rgba(67, 54, 51, 0.8);

    border-radius: 0 10px 0 10px;

    @media (min-width: 768px) {
      max-width: 42%;
      float: left;
      margin-right: ${pixelToRem(20)};
    }
  }

  .areaparagrafo>div:first-child>p {
    padding-top: 0;
  }

  .no_padding { padding: 0; }
`

export const Services = styled.div`
  padding: ${pixelToRem(20, 0)};

  background-color: var(--button);
  color: var(--textWithe);

  .divCards {
    display: flex;
    flex-wrap: wrap;
    padding-top: ${pixelToRem(20)};
  }

  a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: var(--textWithe);
    background-color: var(--link);
    margin: 0 auto;
    margin-top: 50px;
    margin-top: 10px;
    border: 1px solid;
    font-size: 1.25rem;
    width: 150px;
    padding: 10px 5px;
  }
  
  a:hover {
    text-decoration: underline;
    background-color: transparent;
    transition: .8s;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    .divCards {
      max-height: 420px;
      justify-content: space-between;
    }
   }
`
