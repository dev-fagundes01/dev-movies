import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getMovieCredits,
  getMovieDetail,
  getMovieSimilar,
  getMovieVideo
} from '../../services/getData'
import { getImagens } from '../../utils/getimagens'
import Credits from '../Credits'
import Genres from '../Genres'
import Slider from '../Slider'
import { DivBackground, DivDetail, Cover, DivInfo, DivVideos } from './styles'

function Detail() {
  const { id } = useParams()
  const [movieDetail, setMovieDetail] = useState()
  const [movieSimilar, setMovieSimilar] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieVideo, setMovieVideo] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieDetail(id),
        getMovieSimilar(id),
        getMovieCredits(id),
        getMovieVideo(id)
      ]).then(([detail, similar, credits, video]) => {
        setMovieDetail(detail)
        setMovieSimilar(similar)
        setMovieCredits(credits)
        setMovieVideo(video)
      })
    }
    getAllData()
  }, [id])

  return (
    <>
      {movieDetail && (
        <DivBackground
          image={getImagens(movieDetail.backdrop_path)}
        ></DivBackground>
      )}
      {movieDetail && (
        <DivDetail>
          <Cover>
            <img src={getImagens(movieDetail.poster_path)} />
          </Cover>
          <DivInfo>
            <h1>{movieDetail.title}</h1>
            <Genres genres={movieDetail.genres} />
            <p>{movieDetail.overview}</p>
            <Credits credits={movieCredits} />
          </DivInfo>
        </DivDetail>
      )}
      {movieVideo &&
        movieVideo.map((video) => (
          <DivVideos key={video.id}>
            <div>
              <h4>{video.name}</h4>
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                title="Youtube Video Player"
                height="1700"
                width="70%"
              ></iframe>
            </div>
          </DivVideos>
        ))}
      {movieSimilar && (
        <Slider info={movieSimilar} title={'Filmes Similares'}></Slider>
      )}
    </>
  )
}

export default Detail
