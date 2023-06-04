import { useState, useEffect } from 'react'

import { ButtonMovie, ButtonTrailer } from '../../components/Button/styles'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import api from '../../services/api'
import { gerImagens } from '../../utils/getimagens'
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
  const [moviesUpcoming, setMovieUpcoming] = useState()
  const [seriesUpcoming, setSeriesUpcoming] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovie(results[0])
    }
    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')

      setTopMovies(results)
    }
    async function getTopSeries() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated')

      setTopSeries(results)
    }
    async function getTopPerson() {
      const {
        data: { results }
      } = await api.get('/person/popular')

      setTopPerson(results)
    }
    async function getMovieUpcoming() {
      const {
        data: { results }
      } = await api.get('/movie/upcoming')

      setMovieUpcoming(results)
    }
    async function getSeriesUpcoming() {
      const {
        data: { results }
      } = await api.get('/tv/on_the_air')

      setSeriesUpcoming(results)
    }

    getMovies()
    getTopMovies()
    getTopSeries()
    getTopPerson()
    getMovieUpcoming()
    getSeriesUpcoming()
  }, [])

  return (
    <>
      {movie && (
        <DivBackground img={gerImagens(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal}></Modal>
          )}
          <DivConteiner>
            <DivInfo>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <DivButton>
                <ButtonMovie white={toString(false)}>Assista Agora</ButtonMovie>
                <ButtonTrailer
                  white={toString(true)}
                  onClick={() => setShowModal(true)}
                >
                  Assista ao Trailer
                </ButtonTrailer>
              </DivButton>
            </DivInfo>
            <DivPoster>
              <img src={gerImagens(movie.poster_path)} alt="capa-do-filme" />
            </DivPoster>
          </DivConteiner>
        </DivBackground>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'}></Slider>}
      {topSeries && <Slider info={topSeries} title={'Top Séries'}></Slider>}
      {topPerson && <Slider info={topPerson} title={'Top Artistas'}></Slider>}
      {moviesUpcoming && (
        <Slider info={moviesUpcoming} title={'Próximos Filmes'}></Slider>
      )}
      {seriesUpcoming && (
        <Slider info={seriesUpcoming} title={'Próximas Séries'}></Slider>
      )}
    </>
  )
}

export default Home
