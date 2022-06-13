import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  height: 70vh;
  width: 100%;
  margin: 4vw;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: end;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    width: auto;
    margin: 0 8vw;
    height: 100vh;
  }
`
export const ProjectList = styled.div`
  grid-column: 1/2;
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-behavior: smooth;
  z-index: 1;
  @media (max-width: 480px) {
    gap: 4rem;
  }
`
export const ProjectMedia = styled.div`
  grid-column: 2/3;
  height: 60vh;
  width: 50vw;
  position: fixed;
  right: 10%;
  @media (max-width: 480px) {
    height: 24vh;
    width: 40vw;
    right: unset;
    left: 0;
    top: 0;
  }
`
