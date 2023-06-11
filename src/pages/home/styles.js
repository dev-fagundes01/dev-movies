import { styled } from 'styled-components'

export const DivBackground = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const DivConteiner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 2500px;
`
export const DivInfo = styled.div`
  z-index: 2;
  width: 60vw;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 5rem;
    color: white;
  }
  p {
    font-size: 2rem;
    margin-top: 60px;
    margin-bottom: 40px;
    color: white;
  }
`
export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
`
export const DivPoster = styled.div`
  z-index: 2;
  img {
    border-radius: 50px;
    height: 60rem;
  }
`
