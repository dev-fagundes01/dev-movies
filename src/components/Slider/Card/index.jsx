import { gerImagens } from '../../../utils/getimagens'
import { Container } from './styles'

function Card({ item }) {
  return (
    <Container>
      <img src={gerImagens(item.poster_path || item.profile_path || '')} />
      <h3>{item.original_title || item.name}</h3>
    </Container>
  )
}

export default Card
