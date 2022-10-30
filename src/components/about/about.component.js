import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap/all"

import { AboutUs, ImageWrapper, Text, Title, Wrapper } from "./about.styles"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  let aboutRef = useRef(null)

  useEffect(() => {
    const title = aboutRef.children[0]
    const image = aboutRef.children[1].children[0]

    gsap.from(title.children[0], {
      y: "100%",
      autoAlpha: 0,
      delay: 0.2,
      duration: 1.5,
    })
    gsap.to(image, {
      scale: 1.2,
      scrollTrigger: {
        scrub: true,
        toggleActions: "play resume reverse none",
        start: "center center",
      },
    })
  })

  return (
    <Wrapper ref={el => (aboutRef = el)}>
      <Title>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ex
          dui.
        </span>
      </Title>

      <ImageWrapper>
        <StaticImage
          src="../../images/pexels-kaique-rocha-598917.jpg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          alt="woman modelling"
        />
      </ImageWrapper>
      <AboutUs>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ex
          dui. Sed ultricies, purus sit amet placerat pellentesque, odio metus
          vestibulum tellus, a euismod arcu eros pharetra arcu. Nullam semper,
          sapien in posuere posuere, magna libero vestibulum diam, at porttitor
          sem augue faucibus est. Integer eu cursus.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ex
          dui. Sed ultricies, purus sit amet placerat pellentesque, odio metus
          vestibulum tellus, a euismod arcu eros pharetra arcu. Nullam semper,
          sapien in posuere posuere, magna velit
        </Text>
      </AboutUs>
    </Wrapper>
  )
}
export default About
