import { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import Card from './Card'
import { DivSlider } from './styles'

function Slider({ info }) {
  const [infoSlider, setInfoSlider] = useState()
  useEffect(() => {
    setInfoSlider(info)

    if (infoSlider === undefined) {
      const errorMessageElement = document.getElementById('error-message')
      errorMessageElement.style.display = 'flex'
      errorMessageElement.style.fontSize = '5rem'
      errorMessageElement.style.color = 'red'
      errorMessageElement.style.marginBottom = '1rem'
    } else {
      const errorMessageElement = document.getElementById('error-message')
      errorMessageElement.style.display = 'hidden'
    }
  })

  return (
    <>
      {info && (
        <DivSlider>
          <h2>Filmes Similares</h2>
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
      )}
      <p id="error-message">
        O slider de Filmes não estar carregado. Por favor, tente novamente mais
        tarde.
      </p>
    </>
  )
}

export default Slider
