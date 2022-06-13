import styled from "styled-components"

export const ImgWrapper = styled.div.attrs(props => ({
  className: props.className,
}))`
  position: absolute;
  width: 48%;
  height: 100%;
  pointer-events: none;

  > div {
    opacity: 0;
    // transform: translateY(100%);
    transform: scale(0.8);
  }

  &.is-active > div {
    opacity: 1;
    transform: scale(1);
    transition: all 0.5s ease-in;
  }
  @media (min-width: 481px) {
    &.imgWrapper0 {
      top: -10%;
      left: 0;
    }
    &.imgWrapper1 {
      bottom: -10%;
      right: 0;
    }
  }

  @media (max-width: 480px) {
    height: 100%;
    width: 100%;
    transform: translate3d(0px, 0px, 0px);

    &.is-active {
      transform: translate3d(
          calc(100% - ${props => props.width / 2}px),
          ${props => props.y - props.height}px,
          0px
        )
        rotate(2deg);
    }
  }
`
//original: x - width /2 && y-height /2
// ${props => props.x - props.width / 2}px,
