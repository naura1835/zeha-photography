import React, { useEffect, useRef } from "react"
import gsap from "gsap/all"

import ProjectImage from "../../components/projectImage/projectImage.component"
import ProjectTitle from "../../components/projectTitle/projectTitle.component"
import useMousePosition from "../../hooks/useMouse"

import { ProjectList, ProjectMedia, Wrapper } from "./projects.styles"

const Projects = ({ data }) => {
  let projectWrapperRef = useRef(null)

  const [activeIndex, setActiveIndex] = React.useState(-1)
  const { x, y } = useMousePosition()
  const arrCount =
    typeof window !== "undefined" && window.innerWidth <= 480 ? 1 : 2

  useEffect(() => {
    gsap.from(projectWrapperRef.children[0].children, {
      delay: 2.0,
      y: 20,
      autoAlpha: 0,
      ease: "Power3.easeInOut",
      stagger: {
        amount: 0.5,
      },
    })
  }, [])

  return (
    <Wrapper ref={el => (projectWrapperRef = el)}>
      <ProjectList>
        {data.allStrapiProject.nodes
          .sort((a, b) => a.strapi_id - b.strapi_id)
          .map(({ category, project_title, slug, strapi_id }, index) => (
            <ProjectTitle
              title={project_title}
              category={category}
              key={strapi_id}
              setActiveIndex={setActiveIndex}
              slug={slug}
              index={index}
            />
          ))}
      </ProjectList>
      <ProjectMedia>
        {data.allStrapiProject.nodes.map(project =>
          project.image
            .filter((img, id) => id < arrCount)
            .map((img, index) => {
              const isActive = project.strapi_id - 1 === activeIndex
              const xPos = isActive && window.innerWidth <= 480 ? x : 0
              const yPos = isActive && window.innerWidth <= 480 ? y : 0

              if (img.localFile?.childImageSharp !== null) {
                return (
                  <ProjectImage
                    key={index}
                    url={img.localFile?.childImageSharp.gatsbyImageData}
                    active={isActive}
                    id={index}
                    x={xPos}
                    y={yPos}
                  />
                )
              }
              return null
            })
        )}
      </ProjectMedia>
    </Wrapper>
  )
}
export default Projects
