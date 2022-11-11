import React, { useEffect, useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

import {
  ImageWrapper,
  ProjectName,
  DateInfo,
  ProjectInfoWrapper,
  Wrapper,
  VideoWrapper,
} from "./projectDetails.style"

gsap.registerPlugin(ScrollTrigger)

const ProjectDetails = ({ data }) => {
  let projectRef = useRef(null)

  const imgRevealRef = useRef([])
  imgRevealRef.current = []

  useEffect(() => {
    const title = projectRef.children[0].children[0]
    // const gallery = projectRef.children[2].children[1]

    gsap.set(title.children[1], {
      scale: 1.2,
    })

    gsap.to(title.children[1], {
      ease: "none",
      scale: 0.9,
      duration: 1.8,
      scrollTrigger: {
        trigger: title,
        scrub: true,
        start: "center center+=100",
        toggleActions: "restart pause reverse pause",
      },
    })
    imgRevealRef.current.forEach(el => {
      gsap.to(el.children[0], {
        scale: 1.5,
        duration: 1.8,
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          toggleActions: "restart pause reverse pause",
        },
      })
    })
  }, [])

  const addToRefs = el => {
    if (el && !imgRevealRef.current.includes[el]) {
      imgRevealRef.current.push(el)
    }
  }

  return (
    <div ref={el => (projectRef = el)}>
      <Wrapper>
        <ProjectInfoWrapper>
          <DateInfo>{data.strapiProject.project_date}</DateInfo>
          <ProjectName>{data.strapiProject.project_title}</ProjectName>
        </ProjectInfoWrapper>
        <ImageWrapper>
          {data.strapiProject.image.map((img, index) => {
            if (img.localFile?.childImageSharp !== null) {
              return (
                <div key={index} ref={addToRefs}>
                  <GatsbyImage
                    image={img.localFile?.childImageSharp.gatsbyImageData}
                    alt={data.strapiProject.project_title}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
              )
            }
            {
              return (
                <VideoWrapper key={index}>
                  <video controls style={{ objectFit: "cover" }}>
                    <source src={img.localFile?.publicURL} type="video/mp4" />
                  </video>
                </VideoWrapper>
              )
            }
          })}
        </ImageWrapper>
      </Wrapper>
    </div>
  )
}
export default ProjectDetails
