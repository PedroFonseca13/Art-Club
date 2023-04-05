import Carousel from 'react-bootstrap/Carousel'
import carrousel1 from '../../assets/img/IMG_3278.JPG'
import carrousel2 from '../../assets/img/IMG_3292.JPG'
import carrousel3 from '../../assets/img/IMG_3185.JPG'

const CarouselFade = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrousel1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrousel2}

            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrousel3}

            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselFade
