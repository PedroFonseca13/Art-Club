import React from 'react'
import { Container } from 'react-bootstrap'
import { FooterComponent, DivFlex, FooterTitle, Time, Social, Address } from './styles'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterComponent>
      <Container>
        <DivFlex>
          <Time>
            <FooterTitle>horário de funcionamento</FooterTitle>
            <ul>
              <li>
                <p>ter - sex</p>
                <p className='hour'>09hrs às 20hrs</p>
              </li>
              <li>
                <p>sábado </p>
                <p className='hour'>08hrs às 18hrs</p>
              </li>
            </ul>
          </Time>
          <hr />
          <Social>
            <FooterTitle>Contatos e Redes sociais</FooterTitle>
            <ul>
              <li>
                <FaInstagram />
                <p>Instagram</p>
              </li>
              <li>
                <FaWhatsapp />
                <p>Whatsapp</p>
              </li>
              <li>
                <FaFacebook />
                <p>Facebook</p>
              </li>
            </ul>
          </Social>
          <hr />
          <Address>
            <FooterTitle>Endereço</FooterTitle>
            <div>
              <p>R. Pte. Nova, 857 - Loja 5</p>
              <p>Colégio Batista, Belo Horizonte/MG</p>
            </div>
          </Address>
        </DivFlex>
      </Container>
    </FooterComponent >
  )
}

export default Footer
