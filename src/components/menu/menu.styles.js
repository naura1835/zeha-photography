import styled from "styled-components"

export const Line = styled.div.attrs(props => ({
  className: props.className,
}))`
  &.active {
    background-color: #000000;
  }
  height: 2px;
  :nth-child(1) {
    width: 22px;
    transform: ${props =>
      props.menu ? "rotate(45deg) translateY(4px)" : null};
  }
  :nth-child(2) {
    width: ${props => (props.menu ? "22px" : "11px")};
    transform: ${props =>
      props.menu ? "rotate(-45deg) translateY(-3px)" : null};
  }
  transition: transform 0.75s cubic-bezier(0.19, 1, 0.22, 1);
`
export const MenuWrapper = styled.div`
  width: 30px;
  height: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  margin: auto;
`
