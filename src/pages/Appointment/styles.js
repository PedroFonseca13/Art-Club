import styled from 'styled-components';
import Background from '../../assets/img/background_appointment_small.jpg'
import pixelToRem from '../../utils/pxToRem';

export const Main = styled.div`
  background: url(${Background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: calc(100vh - 56px);

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${pixelToRem(40)};
  padding-top: ${pixelToRem(40)};
  color: #f1f1f1;
  text-shadow: 3px 3px #000000d5;
  display: flex;
  justify-content: center;

  :before {
    content: "";
    display: block;
    width: 200px;
    height: 5px;
    background: #f1f1f1;
    top: 150px;
    position: absolute;
    text-align: center;
    box-shadow: 3px 3px #000000d5;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #898a93da;
  padding: 20px 10px;
  border-radius: ${pixelToRem(10)};
  gap: ${pixelToRem(10)};
  margin: 0 auto;
  margin-top: ${pixelToRem(50)};
  width: 100%;

  input[type=submit]{
    background-color: #433633;
    color: #f1f1f1;
    border: none;
    border-radius: ${pixelToRem(5)};
    font-size: ${pixelToRem(20)};
    margin-top: ${pixelToRem(20)};
    padding: ${pixelToRem(10, 0)};
    text-transform: uppercase;
    font-weight: 700;
  }
`

export const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  label {
    width: 45%;
    display: flex;
    flex-direction: column;
  }
`

export const Input = styled.input`
  border: none;
  border-radius: ${pixelToRem(5)};
  outline: none;
  padding-left: 10px;
  width: 100%;
`

export const Select = styled.select`
    border: none;
    border-radius: ${pixelToRem(5)};
    outline: none;
    padding-left: 10px;
    height: 100%;

  option {

  }
`;
