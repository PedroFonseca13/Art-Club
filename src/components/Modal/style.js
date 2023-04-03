import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: center;
  min-height: 150px;
  justify-content: center;
  width: 100%;

  background: ${props => `url(${props.img}) no-repeat center center`};
  background-size: cover;
  /* background-color: #3a5a40; */
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  transition: .6s;
  cursor: pointer;

  -webkit-filter: grayscale(100%);
filter: grayscale(100%);
filter: gray;


  :hover {
    -webkit-filter: none;
filter: none;
  }
`

export const CardTitle = styled.h1`
  color: #fff;
`
