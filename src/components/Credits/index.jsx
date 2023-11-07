import { getImagens } from '../../utils/getimagens'
import { Title, Container, DivCredits } from './styles'

function Credits({ credits }) {
  return (
    <>
      <Title>Creditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 12).map((artist) => (
            <DivCredits key={artist.id}>
              <img src={getImagens(artist.profile_path)} />
              <h4>{artist.original_name}</h4>
            </DivCredits>
          ))}
        </Container>
      )}
    </>
  )
}

export default Credits
