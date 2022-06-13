import styled from "styled-components"
import { CaptionText, H1 } from "../../globalStyles/textStyles"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 2vh 0;
`
export const BackgroundDiv = styled.div`
  position: fixed;
  top: 0;
  background-color: #000;
  height: 100vh;
  width: 100%;
`
export const ProjectInfoWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2vh 4vw;
  @media (max-width: 480px) {
    //   bottom: 50%;
    //   left: 0;
    //   transform: translate(15%, 50%);
  }
`
export const DateInfo = styled(CaptionText)`
  text-transform: uppercase;
  width: fit-content
  cursor: pointer;
  align-self: end;
  color: rgba(35, 33, 41, 0.8);
`
export const ProjectName = styled(H1)`
  text-transform: uppercase;
  width: 18ch;
  text-align: left;
  z-index: 2;
  color: #25251f;
  justify-self: start;
  // left: 50%;

  // @media (max-width: 480px) {
  //   width: 70%;
  //   text-align: center;
  // }
`
export const VideoWrapper = styled.div`
  height: auto;
  width: 100%;
  > video {
    width: 100%;
    height: 100%;
  }
`
export const ImageWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  grid-template-rows: minmax(min-content, max-content);
  gap: 20vh;
  column-gap: 15vh;
  margin-bottom: 10vh;
  > div {
    overflow: hidden;
  }

  > div:nth-child(even) {
    height: 90%;
    width: 80%;
    justify-self: center;
    align-self: end;
    grid-column: 1/2;
    // z-index: -4;
  }
  > div:nth-child(odd) {
    height: 90%;
    width: 80%;
    justify-self: start;
    grid-column: 2/4;
  }
  > div:nth-child(4n) {
    width: 100%;
    height: 70%;
    align-self: start;
    justify-self: start;
    grid-column: 2/3;
  }
  >div: nth-child(4n+1) {
    width: 100%;
    height: 70%;
    align-self: end;
    justify-self: end;
    grid-column: 3/4;
  }
  >div: nth-child(9n) {
    height: 60vh;
    width: 60vw;
    grid-column: 1/4;
    align-self: center;
    justify-self: center;
  }
  > div:nth-child(1) {
    width: 60%;
    height: 80vh;
    margin-bottom: 10vh;
    z-index: 3;
    grid-column: 2/4;
    align-self: center;
    justify-self: start;
    // clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  > ${VideoWrapper} {
    grid-column: 1/4 !important;
    // width: 100% !important;
    height: 60vh !important;
    margin-bottom: 0 !important;
    justify-self: center !important;
  }

  @media (max-width: 1024px) {
    column-gap: 5vw;
    row-gap: 5vh;
    padding: 0 5vw;

    > div:nth-child(even),
    > div:nth-child(odd) {
      width: 100%;
    }
    > div:nth-child(1) {
      width: 80%;
      height: 60vh;
      align-self: start;
    }
  }

  @media (max-width: 768px) {
    > div:nth-child(1) {
      grid-column: 1/4;
      justify-self: center;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8vh;
    padding: 0 5vw;

    > div:nth-child(n) {
      align-self: center;
      justify-self: center;
      height: 50%;
      width: 70%;
    }
    > div:nth-child(odd) {
      align-self: flex-start;
    }
    > div:nth-child(3n) {
      align-self: flex-end;
    }
    > div:nth-child(1) {
      margin-bottom: 0;
    }
    > ${VideoWrapper} {
      width: 100% !important;
    }
  }
`
