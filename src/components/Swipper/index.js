// import Swiper core and required modules
import { Autoplay, Pagination, Scrollbar } from 'swiper'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import PropTypes from 'prop-types'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// css
import './style.css'

const SwiperComponent = ({ slides }) => {
  return (
      <Swiper
        className='swipper'
        modules={[Autoplay, Pagination, Scrollbar]}
        loop
        autoplay={{
          delay: 3000
        }}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 2
          }
        }}
        onSlideChange={() => console.log('Slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map(({ url }) => (
            <SwiperSlide key={url}>
              <img src={url} />
            </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default SwiperComponent

SwiperComponent.propTypes = {
  slides: PropTypes.string
}
