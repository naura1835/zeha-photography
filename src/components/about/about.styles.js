import styled from "styled-components"

import { BodyIntroText, H1 } from "../../globalStyles/textStyles"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50vh 8vw 2vh;
  gap: 80px;

  @media (max-width: 680px) {
    padding-top: 20vh;
    gap: 50px;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 600px;
  object-fit: cover;
  align-self: flex-start;
  overflow: hidden;

  @media (max-width: 680px) {
    height: 400px;
    justify-self: end;
  }
  @media (max-width: 480px) {
    height: 300px;
    justify-self: end;
  }
`

export const AboutUs = styled.article`
  width: 80%;
  height: fit-content;
  align-self: center;
  display: grid;
  gap: 20px;

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const Title = styled(H1)`
  text-align: center;
  width: 80%;
  height: auto;
  font-weight: 500;
  overflow: hidden;

  > span {
    display: inline-block;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const Text = styled(BodyIntroText)`
  text-align: center;
  line-height: 150%;
`
