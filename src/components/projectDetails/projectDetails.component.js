import React, { useEffect, useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  BackgroundDiv,
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
    const revealBackground = projectRef.children[0]
    const revealGallery = projectRef.children[1]
    const title = projectRef.children[2].children[0].children[0]
    const firstImg = document.querySelector(".first-img")
    // const gallery = projectRef.children[2].children[1]

    const tl = gsap.timeline({
      onComplete: () => {
        ScrollTrigger.refresh()
      },
    })
    tl.to([revealBackground, revealGallery], {
      ease: "Power3.easeInOut",
      height: "0%",
      skewY: -2,
      transformOrigin: "bottom",
      stagger: {
        amount: 0.07,
      },
      duration: 0.8,
    }).from(
      title,
      {
        x: "-20%",
        autoAlpha: 0,
        ease: "Power3.easeInOut",
        delay: 0.9,
      },
      "s"
    )
    if (firstImg != null) {
      tl.from(
        firstImg,
        {
          // clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          ease: "Power3.easeInOut",
          scale: 0.8,
          autoAlpha: 0,
          delay: 0.9,
        },
        "s"
      )
    }
    imgRevealRef.current.forEach((el, index) => {
      gsap.from(
        el,
        {
          // clipPath: "polygon(0 30%, 100% 30%, 100% 100%, 0 100%)",
          scale: 0.9,
          autoAlpha: 0,
          // y: "20%",
          ease: "Power0.easeInOut",
          scrollTrigger: {
            trigger: el,
            // markers: true,
            start: "top bottom-=150",
          },
        },
        "s"
      )
    })
  }, [])

  const addToRefs = el => {
    if (el && !imgRevealRef.current.includes[el]) {
      imgRevealRef.current.push(el)
    }
  }

  return (
    <div ref={el => (projectRef = el)}>
      <BackgroundDiv style={{ zIndex: 6 }}></BackgroundDiv>
      <BackgroundDiv
        style={{ backgroundColor: "#d1c4e9", zIndex: 5 }}
      ></BackgroundDiv>
      <Wrapper>
        <ProjectInfoWrapper>
          <ProjectName>
            {data.strapiProjects.project_title}
            <DateInfo>{data.strapiProjects.project_date}</DateInfo>
          </ProjectName>
        </ProjectInfoWrapper>
        <ImageWrapper no={data.strapiProjects.image.length}>
          {data.strapiProjects.image.map((img, index) => {
            if (img.localFile.childImageSharp !== null) {
              return (
                <div
                  key={index}
                  className={index >= 1 ? "img-card" : "first-img"}
                  ref={index >= 1 ? addToRefs : null}
                >
                  <GatsbyImage
                    image={getImage(img.localFile.childImageSharp)}
                    alt={data.strapiProjects.project_title}
                    className={index >= 1 ? "img" : null}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
              )
            }
            return (
              <VideoWrapper key={index}>
                <video
                  // width="800"
                  // height="400"
                  controls
                  style={{ objectFit: "cover" }}
                >
                  <source src={img.localFile.publicURL} type="video/mp4" />
                </video>
              </VideoWrapper>
            )
          })}
        </ImageWrapper>
      </Wrapper>
    </div>
  )
}
export default ProjectDetails
