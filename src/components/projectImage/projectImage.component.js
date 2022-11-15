import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useSize from "../../hooks/useSize"

import { ImgWrapper } from "./projectImage.styles"

export default function ProjectImage({ id, active, url, x, y }) {
  const [ref, { width, height }] = useSize()

  return (
    <ImgWrapper
      className={`imgWrapper${id} ${active ? "is-active" : null}`}
      ref={ref}
      x={x}
      y={y}
      width={width}
      height={height}
    >
      <GatsbyImage
        image={url}
        alt=""
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
      />
    </ImgWrapper>
  )
}
