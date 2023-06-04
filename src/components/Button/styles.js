import styled, { css } from 'styled-components'

const buttonStyles = css`
  box-shadow: 0px -4px 18px 30px rgba(17, 17, 26, 0.18);
  height: 70px;
  width: 300px;
  border-radius: 40px;
  font-size: 25px;
  font-weight: 900;
  border: none;
  background: red;
  color: white;
  cursor: pointer;

  &:hover {
    background: transparent;
    border: solid 8px black;
    color: black;
  }
  &:active {
    opacity: 0.5;
  }
`
export const ButtonMovie = styled.button`
  ${buttonStyles}
`
export const ButtonTrailer = styled.button`
  ${buttonStyles}

  border: solid 8px;
  background: transparent;

  &:hover {
    background: white;
    color: red;
    border: none;
  }
`
// ou

/*
export const Buttons = styled.button`
  box-shadow: 0px -4px 18px 30px rgba(17, 17, 26, 0.18);
  height: 70px;
  width: 300px;
  border-radius: 40px;
  font-size: 25px;
  font-weight: 900;
  border: none;
  background: red;
  color: white;
  cursor: pointer;

  &:hover {
    background: transparent;
    border: solid 8px black;
    color: black;
  }
  &:active {
    opacity: 0.5;
  }
  ${(props) =>
    props.isTrailer &&
    `
    border: solid 8px;
    background: transparent;

    &:hover{
        background: white;
        color: red;
        border: none;
      }
  `}
`
*/
