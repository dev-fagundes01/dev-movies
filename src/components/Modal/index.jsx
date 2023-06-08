import { useEffect, useState } from 'react'

import { getMovieModal } from '../../services/getData'
import { Background, Container } from './styles'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()
  useEffect(() => {
    async function getMovie() {
      setMovie(await getMovieModal(movieId))
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
    </Background>
  )
}

export default Modal
