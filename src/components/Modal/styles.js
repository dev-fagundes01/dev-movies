import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 4;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const Container = styled.div`
  background: #000;
  width: 65%;
  height: 55vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 150%;
    margin-left: 95%;
    color: white;
    cursor: pointer;
  }

  iframe {
    border: none;
    height: 80%;
    width: 90%;
  }
`;
