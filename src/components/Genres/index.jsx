import { DivGenres } from './styles'

function Genres({ genres }) {
  return (
    <>
      <DivGenres>
        {genres &&
          genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
      </DivGenres>
    </>
  )
}

export default Genres
