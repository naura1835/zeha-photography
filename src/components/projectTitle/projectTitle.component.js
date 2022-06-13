import React from "react"
import { Link } from "gatsby"

import { Category, Counter, Title, Wrapper } from "./projectTitle.styles"

export default function ProjectTitle({
  category,
  index,
  slug,
  title,
  setActiveIndex,
}) {
  return (
    <Wrapper
      className="title-div"
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(-1)}
      onTouchStart={() => setActiveIndex(index)}
      onTouchEnd={() => setActiveIndex(-1)}
    >
      <Link
        to={`/works/${slug}`}
        style={{
          display: "flex",
          gap: "10px",
          color: "#fff",
        }}
      >
        <div style={{ height: "auto", overflow: "hidden" }}>
          <Counter>
            {index.toString().length === 1 ? `0${index + 1}` : `${index + 1}`}
          </Counter>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Title>{title}</Title>
          <div style={{ height: "auto", overflow: "hidden" }}>
            <Category>{category}</Category>
          </div>
        </div>
      </Link>
    </Wrapper>
  )
}
