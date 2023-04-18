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
                <a target="_blank" href="" rel="noreferrer">
                  <FaInstagram />
                  <p>Instagram</p>
                </a>
              </li>
              <li>
                <a target="_blank" aria-label="Chat on WhatsApp" href="https://wa.me/5531984079820?text=Olá%20quero%20marcar%20um%20horário." rel="noreferrer" >
                  <FaWhatsapp />
                  <p>Whatsapp</p>
                </a>
              </li>
              <li>
                <a target="_blank" href="" rel="noreferrer">
                  <FaFacebook />
                  <p>Facebook</p>
                </a>
              </li>
            </ul>
          </Social>
          <hr />
          <Address>
            <FooterTitle>Endereço</FooterTitle>
            <address>
              <p>R. Pte. Nova, 857 - Loja 5</p>
              <p>/</p>
              <p>Colégio Batista, Belo Horizonte/MG</p>
            </address>
          </Address>
        </DivFlex>
      </Container>
    </FooterComponent >
  )
}

export default Footer
