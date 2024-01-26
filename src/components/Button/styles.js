import styled, { css } from 'styled-components'

const buttonStyles = css`
  box-shadow: 0px -4px 18px 30px rgba(17, 17, 26, 0.18);
  height: 40px;
  width: 180px;
  border-radius: 40px;
  font-size: 11px;
  font-weight: 900;
  border: none;
  border: solid 8px;
  background: transparent;
  cursor: pointer;

  &:active {
    opacity: 0.5;
  }
`
export const ButtonMovie = styled.button`
  ${buttonStyles}

  &:hover {
    color: #2D0A75;
  }
`
export const ButtonTrailer = styled.button`
  ${buttonStyles}

  &:hover {
    color: green;
  }
`