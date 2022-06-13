import styled from "styled-components"
import { Display, SmallMediumText } from "../../globalStyles/textStyles"

export const HeaderWrapper = styled.div`
  height: 10vh;
  width: 100%;
  padding: 2vh 4vw;
  position: relative;
`
export const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  @media (max-width: 480px) {
    height: auto;
    padding-top: 3vh;
  }
`
export const Logo = styled(SmallMediumText).attrs(props => ({
  className: props.className,
}))`
  > a {
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;

  &.active {
    color: #000000;
  }
`
export const Menu = styled.ul`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #d1c4e9;
  z-index: 2;
  @media (max-width: 480px) {
    padding-top: 20%;
  }
`
export const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 480px) {
    height: 80%;
    margin: 20% 0 15%;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    row-gap: 5vh;
  }
`
export const ContactWrapper = styled.div`
  width: 40%;
  align-self: start;
  @media (max-width: 480px) {
    width: 100%;
  }
`
export const MenuItems = styled.div`
  width: 40vw;
  align-self: center;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 10vh;
  justify-items: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-items: start;
    gap: 5vh;
  }
`

export const MenuItem = styled(Display)`
  > a {
    text-transform: uppercase;
    text-decoration: none;
    color: black;
  }
  > a:hover {
    color: transparent;
    -webkit-text-stroke: 1px #25251f;
  }
`
export const MenuIconWrapper = styled.button`
  cursor: pointer;
  border: transparent;
  background-color: transparent;
  outline: none;
`
