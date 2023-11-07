import { useEffect, useState } from 'react'

import { getMovieModal } from '../../services/getData'
import { Background, Container } from './styles'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()
  useEffect(() => {
    async function getMovie() {
      setMovie(await getMovieModal(movieId))

      if (movie === undefined) {
        const errorMessageElement = document.getElementById('error-message')
        errorMessageElement.style.display = 'flex'
      } else {
        const errorMessageElement = document.getElementById('error-message')
        errorMessageElement.style.display = 'hidden'
      }
    }
    getMovie()
  })

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <p onClick={() => setShowModal(false)}>X</p>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
      <p id="error-message">
        O modal não estar carregando. Por favor, tente novamente mais tarde.
      </p>
    </Background>
  )
}

export default Modal
