import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonMovie, ButtonTrailer } from '../../components/Button/styles'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovie,
  getTopMovies,
  getTopPerson,
  getTopSeries
} from '../../services/getData'
import { getImagens } from '../../utils/getimagens'
import {
  DivBackground,
  DivButton,
  DivConteiner,
  DivInfo,
  DivPoster
} from './styles'

function Home() {
  const [showModal, setShowModal] = useState()
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [topPerson, setTopPerson] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovie(),
        getTopMovies(),
        getTopSeries(),
        getTopPerson()
      ]).then(
        ([
          Movie,
          TopMovie,
          TopSeries,
          TopPerson
        ]) => {
          setMovie(Movie)
          setTopMovies(TopMovie)
          setTopSeries(TopSeries)
          setTopPerson(TopPerson)
        }
      )
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <DivBackground img={getImagens(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal}></Modal>
          )}
          <DivConteiner>
            <DivInfo>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <DivButton>
                <ButtonMovie
                  white={toString(false)}
                  onClick={() => navigate(`/Detalhes/${movie.id}`)}
                >
                  Assista Agora
                </ButtonMovie>
                <ButtonTrailer
                  white={toString(true)}
                  onClick={() => setShowModal(true)}
                >
                  Assista ao Trailer
                </ButtonTrailer>
              </DivButton>
            </DivInfo>
            <DivPoster>
              <img src={getImagens(movie.poster_path)} alt="capa-do-filme" />
            </DivPoster>
          </DivConteiner>
        </DivBackground>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'}></Slider>}
      {topSeries && <Slider info={topSeries} title={'Top Séries'}></Slider>}
      {topPerson && <Slider info={topPerson} title={'Top Artistas'}></Slider>}
    </>
  )
}

export default Home
