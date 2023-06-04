import { ButtonMovie, ButtonTrailer } from './styles'

function Button({ children, white, ...rest }) {
  return (
    <>
      {white ? (
        <ButtonMovie {...rest}>{children}</ButtonMovie>
      ) : (
        <ButtonTrailer {...rest}>{children}</ButtonTrailer>
      )}
    </>
  )
}

export default Button
