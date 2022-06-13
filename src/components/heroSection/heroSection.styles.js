import styled from "styled-components"
import { CaptionText, TitleDisplay } from "../../globalStyles/textStyles"

export const Wrapper = styled.div`
  height: 90vh;
  padding-bottom: 4vh;
  position: relative;
`
export const HeroContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled(TitleDisplay)`
  text-align: center;
  text-transform: uppercase;
  z-index: 2;
  display: inline-block;
  height: auto;
  overflow: hidden;
  > span {
    overflow: hidden;
    display: inline-block;
  }
`
export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  padding: 2vh 4vw 0;
  display: flex;
  @media (max-width: 480px) {
    width: 100%;
  }
`
export const SocialLink = styled(CaptionText)`
  color: #fff;
`
export const HeroImages = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  > div {
    position: absolute;
  }

  &div > img {
  }
  & div:nth-child(1) {
    top: 0;
    left: 35%;
    height: 60%;
    width: 30%;
  }
  & div:nth-child(2) {
    right: 0;
    bottom: 10%;
    height: 80%;
    width: 30%;
  }
  & div:nth-child(3) {
    bottom: 0;
    right: 20%;
    width: 30%;
    height: 30%;
  }
  & div:nth-child(4) {
    bottom: 20%;
    left: 5%;
    width: 40%;
    height: 45%;
  }
  @media (max-width: 480px) {
    & div:nth-child(1) {
      top: 0%;
      left: 50%;
      height: 50%;
      width: 50%;
    }
    & div:nth-child(2) {
      left: 0;
      bottom: 30%;
      height: 40%;
      width: 40%;
    }
    & div:nth-child(3) {
      width: 60%;
      height: 20%;
      top: 20%;
      left: 20%;
    }
    & div:nth-child(4) {
      bottom: 10%;
      left: 30%;
      width: 60%;
      height: 25%;
    }
  }
`
