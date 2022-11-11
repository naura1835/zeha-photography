import styled from "styled-components"
import { CaptionText, TitleDisplay } from "../../globalStyles/textStyles"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 2vh 0;
`
export const ProjectInfoWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 10vh);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2vh 4vw;
  overflow: hidden;

  @media (max-width: 900px) {
    height: calc(50vh);
  }
`
export const DateInfo = styled(CaptionText)`
  text-transform: uppercase;
  width: fit-content;
  cursor: pointer;
  color: rgba(35, 33, 41, 0.8);
`
export const ProjectName = styled(TitleDisplay)`
  text-transform: uppercase;
  font-weight: bold;
  width: 16ch;
  text-align: center;
  color: #25251f;
  justify-self: start;

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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(min-content, max-content);
  gap: 20vh;
  column-gap: 15vh;
  margin-bottom: 10vh;
  padding: 0 5rem;

  > div {
    overflow: hidden;
  }

  > div:nth-child(even) {
    max-width: 300px;
    max-height: 300px;
    width: 100%;
    height: 100%;
    align-self: center;
  }

  > div:nth-child(odd) {
    max-height: 400px;
    max-width: 300px;
    width: 100%;
    height: 100%;

    justify-self: start;
  }

  > div:nth-child(6n) {
    max-width: 300px;
    max-height: 400px;
    width: 100%;
    height: 100%;

    justify-self: end;
    /* grid-column: 2/3; */
  }
  > div:nth-child(6n + 1) {
    max-width: 300px;
    max-height: 300px;
    width: 100%;
    height: 100%;

    align-self: end;
    justify-self: start;
    grid-column: 2/4;
    margin-top: 15rem;
  }

  > div:nth-child(1) {
    max-width: 300px;
    max-height: 400px;
    width: 100%;
    height: 100%;

    grid-column: 2/3;
    align-self: end;
    justify-self: end;
    margin-top: 10vh;
  }

  > ${VideoWrapper} {
    grid-column: 1/4 !important;
    width: 800px !important;
    max-width: 100%;
    /* height: 60vh !important; */
    margin-bottom: 0 !important;
    justify-self: center !important;
  }

  @media (max-width: 1024px) {
    column-gap: 5vw;
    row-gap: 100px;
    padding: 0 5vw;
    grid-template-columns: repeat(2, 1fr);

    > div:nth-child(6n + 1),
    div:nth-child(1) {
      grid-column: unset;
    }

    > div:nth-child(even) {
      justify-self: center;
      align-self: start;
    }
    > div:nth-child(odd) {
      justify-self: end;
    }
    > div:nth-child(6n) {
      justify-self: start;
      max-height: 400px;
      margin-top: 8vh;
    }
  }

  @media (max-width: 768px) {
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
    > div:nth-child(6n + 1) {
      margin-top: 0;
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
