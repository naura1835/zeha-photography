import styled from "styled-components"
import { BodyMainText, H2 } from "../../globalStyles/textStyles"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  // overflow: hidden;
`
export const InnerWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100%;
  gap: 20px;
  place-items: center;
  margin: 0vh 8vw 0vh;

  @media (max-width: 480px) {
    width: 90%;
    grid-template-columns: 1fr;
    grid-template-rows: 40% auto;
    margin: 0;
  }
`
export const ImageWrapper = styled.div`
  width: 70%;
  height: 60%;
  object-fit: cover;
  align-self: flex-start;

  @media (max-width: 480px) {
    height: 100%;
    width: 70%;
    justify-self: end;
  }
`
export const AboutUs = styled.article`
  height: fit-content;
  align-self: center;
  display: grid;
  gap: 20px;
  @media (max-width: 480px) {
    grid-row: 2/3;
  }
`
export const Title = styled(H2)``
export const Text = styled(BodyMainText)``
