import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { WhatsappButton } from './style'
import './style.css'

function index () {
  const [caralho, setCaralho] = useState('hide')

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 430) {
      setCaralho('show')
    } else {
      setCaralho('hide')
    }
  }

  const scroll = window.addEventListener('scroll',
    () => {
      handleScroll()
    })

  useEffect(() => {
    console.log('Scroll effect enabled')
  }, [scroll])

  return (
    <WhatsappButton className={caralho}>
      <a target="_blank" aria-label="Chat on WhatsApp" href="https://wa.me/5531984079820?text=Olá%20quero%20marcar%20um%20horário." rel="noreferrer" >
        <FaWhatsapp />
      </a>
    </WhatsappButton>
  )
}

export default index
