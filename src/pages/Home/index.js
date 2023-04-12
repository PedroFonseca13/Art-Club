import React, { useEffect } from 'react'
import ArrowDown from '../../components/ArrowDown/Index'
import BarberPole from '../../components/BarberPole'
import Footer from '../../components/Footer'
import ModalComponent from '../../components/Modal'
import Navbar from '../../components/Navbar'
import ParagraphComponent from '../../components/Paragraph'
import SwiperComponent from '../../components/Swipper'
import WhatsappButton from '../../Layout/whatsapp'
import { Container } from 'react-bootstrap'
import { GlobalStyles } from '../../assets/styles/globalStyles'
import { Title, Subtitle, DivFlex } from '../../assets/styles/styles'
import { About, Logo, Main, Services } from './style'
import { Link } from 'react-scroll'
import { about, Jaffar } from '../../utils/texts'
import { services } from '../../utils/services'
import { carrousel } from '../../utils/URLPhotos'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import rafa from '../../assets/img/jaffar.jpeg'

const Home = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { duration: 0.8 }
      })
    }
    if (!inView) {
      animation.start({
        x: '-100vw'
      })
    }
  }, [inView, animation])

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <WhatsappButton />
      <Main>
        <Container>
          <Logo> <BarberPole /> </Logo>

          <Title>Art Club</Title>

          <Subtitle>Nosssa especialide é cuidar de você.</Subtitle>

          <DivFlex>
            <Link
              to="barbershop"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <ArrowDown />
            </Link>
          </DivFlex>
        </Container>
      </Main>

      <About id="barbershop" ref={ref} className="teste">
        <Container>
          <Subtitle className="margin_bottom">
            art
            <motion.span animate={animation}>club</motion.span>
          </Subtitle>

          <div>
            <SwiperComponent slides={carrousel}/>
            <div>
              <ParagraphComponent text={about.text} />
              <ParagraphComponent text={about.text2} />
              <ParagraphComponent text={about.text3} />
            </div>
          </div>
        </Container>
      </About>

      <Services id="services" className="teste2">
        <Container>
          <Subtitle>Serviços</Subtitle>

          <div className="divCards">
            {services.map(({ title, img, description }, i) => (
              <ModalComponent
                key={i}
                title={title}
                img={img}
                description={description}
              />
            ))}
          </div>

          <ParagraphComponent text={about.text} />
        </Container>
      </Services>
      <About id="Jaffar">
        <Container>
          <Subtitle className="margin_bottom">Rafael Jaffar</Subtitle>
          <img src={rafa} alt="Rafael Jaffar" className="profile" />

          <div>
            <ParagraphComponent text={Jaffar.text} />
            <ParagraphComponent text={Jaffar.text2} />
            <ParagraphComponent text={Jaffar.text3} />
            <ParagraphComponent text={Jaffar.text4} />
          </div>
        </Container>
      </About>

      <Footer />
    </>
  )
}

export default Home
