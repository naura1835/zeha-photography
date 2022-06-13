import styled from "styled-components"

import { CaptionText, H1 } from "../../globalStyles/textStyles"

export const Wrapper = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    &:hover > a > div > span {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
export const Counter = styled(CaptionText)`
  margin-top: 5px;
  @media (min-width: 1024px) {
    transform: translateY(100%);
    transform-origin: bottom;
    display: inline-block;
    opacity: 0;
    transition: all 0.2s linear;
    transition-delay: 0.4s;
  }
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled(H1)`
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  position: relative;
  color: #ffffff;

  @media (min-width: 1024px) {
    &:hover + div > span {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export const Category = styled(CaptionText)`
  text-transform: capitalize;

  @media (min-width: 1024px) {
    transform: translateY(100%);
    transform-origin: bottom;
    display: inline-block;
    opacity: 0;
    transition: all 0.1s linear;
  }
`
// Cold Custard,sans-serif
