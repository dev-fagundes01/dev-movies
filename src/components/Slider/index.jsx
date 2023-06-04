import { Swiper, SwiperSlide } from 'swiper/react'

import Card from './Card'
import { DivSlider } from './styles'

function Slider({ info, title }) {
  return (
    <>
      <DivSlider>
        <h2>{title}</h2>
        <Swiper
          grabCursor
          spaceBetween={10}
          sliderperview={'auto'}
          className="swiper"
        >
          {info.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item}></Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </DivSlider>
    </>
  )
}

export default Slider
