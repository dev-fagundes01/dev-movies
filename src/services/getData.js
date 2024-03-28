import api from './api'

export async function getMovie() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[1]
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results
}

export async function getTopPerson() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

export async function getMovieUpcoming() {
  const {
    data: { results }
  } = await api.get('/movie/upcoming')

  return results
}

export async function getSeriesUpcoming() {
  const {
    data: { results }
  } = await api.get('/tv/on_the_air')

  return results
}

export async function getMovieLatest() {
  const {
    data: { results }
  } = await api.get('/movie/now_playing')

  return results
}

export async function getSeriesAiringToday() {
  const {
    data: { results }
  } = await api.get('/tv/airing_today')

  return results
}

export async function getMovieModal(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results[0]
}

export async function getMovieVideo(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results
}

export async function getMovieCredits(movieId) {
  const {
    data: { cast }
  } = await api.get(`/movie/${movieId}/credits`)

  return cast
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar`)

  return results
}

export async function getMovieDetail(movieId) {
  const { data } = await api.get(`/movie/${movieId}`)

  return data
}
