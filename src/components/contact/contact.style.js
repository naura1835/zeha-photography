import styled from "styled-components"
import { BodyMainText, H3, MediumText } from "../../globalStyles/textStyles"

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 70px;
`
export const LogoImg = styled.img`
  @media (max-width: 480px) {
    display: none;
  }
`
export const CompanyName = styled(H3)`
  color: #000000;
  text-transform: Capitalize;
`
export const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`
export const Title = styled(BodyMainText)`
  color: #000000;
  font-weight: bold;
  text-transform: Uppercase;
`
export const Details = styled(MediumText)`
  color: #000000;
`
export const Description = styled(MediumText)`
  color: #000000;
  margin: 1rem 0;
  @media (max-width: 480px) {
    text-align: justify;
  }
`
export const IconWrapper = styled.div`
  display: flex;
  a {
    margin-right: 2rem;
  }
`
