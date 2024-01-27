import styled, { keyframes } from "styled-components";

const scale = keyframes`
from{
  transform: scale(0)
} 
to{
  transform: scale(1)
}
`;

export const DivBackground = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`;
export const DivDetail = styled.div`
  display: flex;
  height: 100%;
  max-width: 80vw;
  margin-top: -280px;
  margin-bottom: 50px;
  gap: 35px;
`;
export const Cover = styled.div`
  margin: 20px;
  display: flex;
  align-items: flex-end;
  height: 100%;
  z-index: 2;
  img {
    height: 55vh;
    margin-left: 105px;
    border-radius: 95px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }
`;
export const DivInfo = styled.div`
  z-index: 2;
  width: 60vw;
  h1 {
    font-size: 3rem;
    color: white;
    display: flex;
    justify-content: center;
  }
  p {
    font-size: 1.5rem;
    color: white;
  }
`;
export const DivVideos = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
  }
  h4 {
    font-size: 2rem;
    text-align: center;
    color: white;
  }
  iframe {
    border: none;
    height: 60vh;
  }
`;
