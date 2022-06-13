import styled from "styled-components"

export const TitleDisplay = styled.h1`
  font-size: 120px;
  font-family: "Roboto";

  @media (max-width: 884px) {
    font-size: 90px;
  }
  @media (max-width: 664px) {
    font-size: 70px;
  }
  @media (max-width: 547px) {
    font-size: 60px;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }

  @media (max-width: 414px) {
    font-size: 34px;
  }
`
export const Display = styled.h1`
  font-size: 80px;
  font-family: "Roboto";
  text-transform: uppercase;

  @media (max-width: 784px) {
    font-size: 60px;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }

  @media (max-width: 414px) {
    font-size: 34px;
  }
`
export const H1 = styled.h1`
  font-size: 48px;
  font-weight: bold;
  font-family: "Roboto";

  @media (max-width: 480px) {
    font-size: 40px;
  }
  @media (max-width: 414px) {
    font-size: 22px;
  }
`
export const H2 = styled.h2`
  font-size: 38px;
  font-weight: 500;
  font-family: "Noto Sans";

  @media (max-width: 414px) {
    font-size: 24px;
    font-weight: 600;
  }
`
export const H3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  font-family: "Roboto";

  @media (max-width: 414px) {
    font-size: 20px;
  }
`
export const BodyIntroText = styled.p`
  font-size: 24px;
  font-family: "Roboto";
`
export const BodyMainText = styled.p`
  font-size: 18px;
  line-height: 130%;
  font-family: "Roboto";
`
export const MediumText = styled.p`
  font-size: 17px;
  ${"" /* font-family: Arial, Helvetica, sans-serif;  */}
  font-family: "Roboto";
  line-height: 130%;
`
export const SmallMediumText = styled.p`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 20px;
`
export const CaptionText = styled.span`
  font-size: 15px;
  line-height: 18px;
  font-family: "Roboto";
`
