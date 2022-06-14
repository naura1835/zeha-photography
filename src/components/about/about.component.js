import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  AboutUs,
  ImageWrapper,
  InnerWrapper,
  Text,
  Title,
  Wrapper,
} from "./about.styles"
import gsap from "gsap/all"

const About = () => {
  let aboutRef = useRef(null)

  useEffect(() => {
    const title = aboutRef.children[0].children[0]
    const paragraph1 = title.nextSibling
    const paragraph2 = paragraph1.nextSibling
    const image = aboutRef.children[1]

    const tl = gsap.timeline()

    gsap.set([title, paragraph1, paragraph2], {
      autoAlpha: 0,
      y: 20,
    })
    tl.fromTo(
      image,
      {
        height: "100%",
        width: "100%",
        x: "-50%",
        y: "0%",
      },
      {
        height: "70%",
        width: "70%",
        x: "0%",
        y: "0%",
        ease: "Power2.easeOut",
        delay: 2,
      }
    )
    tl.to(title, {
      autoAlpha: 1,
      ease: "Power3.easeOut",
      y: 0,
      duration: 1,
      delay: 0.2,
    })
    tl.to([paragraph1, paragraph2], {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "Power3.easeOut",
      stagger: {
        amount: 0.5,
      },
    })
  })

  return (
    <Wrapper>
      <InnerWrapper ref={el => (aboutRef = el)}>
        <AboutUs>
          <Title>Hello there</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
            ex dui. Sed ultricies, purus sit amet placerat pellentesque, odio
            metus vestibulum tellus, a euismod arcu eros pharetra arcu. Nullam
            semper, sapien in posuere posuere, magna libero vestibulum diam, at
            porttitor sem augue faucibus est. Integer eu cursus ligula. Ut sit
            amet sollicitudin neque, ac lacinia magna. Etiam vehicula, neque non
            sodales fringilla, lorem dolor aliquam velit
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
            ex dui. Sed ultricies, purus sit amet placerat pellentesque, odio
            metus vestibulum tellus, a euismod arcu eros pharetra arcu. Nullam
            semper, sapien in posuere posuere, magna libero vestibulum diam, at
            porttitor sem augue faucibus est. Integer eu cursus ligula. Ut sit
            amet sollicitudin neque, ac lacinia magna. Etiam vehicula, neque non
            sodales fringilla, lorem dolor aliquam velit
          </Text>
        </AboutUs>
        <ImageWrapper>
          <StaticImage
            src="../pexels-kaique-rocha-598917.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            alt="woman modelling"
          />
        </ImageWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}
export default About
