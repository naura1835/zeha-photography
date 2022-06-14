import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"

import {
  FooterWrapper,
  HeroContent,
  HeroImages,
  SocialLink,
  Title,
  Wrapper,
} from "./heroSection.styles"

const HeroSection = () => {
  let heroRef = useRef(null)
  const title = ["Z", "E", "H", "A"]
  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.0 })

    const title = heroRef.children[0].children[0]
    const photography = title.nextSibling
    const firstImage = heroRef.children[1].children[0]
    const secondImage = firstImage.nextSibling
    const thirdImage = secondImage.nextSibling
    const fourthImage = thirdImage.nextSibling
    const foot = fourthImage.nextSibling

    tl.add()
      .from(title.children, {
        y: "100%",
        autoAlpha: 0,
        stagger: {
          each: 0.2,
        },
      })
      .from(photography, {
        y: "100%",
        autoAlpha: 0,
      })
      .from([firstImage, secondImage, thirdImage, fourthImage], {
        left: "40%",
        top: "50%",
        width: "20%",
        height: "20%",
        autoAlpha: 0,
      })
      .from(foot.children, {
        autoAlpha: 0,
        y: "100%",
      })
  }, [])
  return (
    <Wrapper ref={el => (heroRef = el)}>
      <HeroContent>
        <Title>
          {title.map((item, id) => (
            <span key={id}>{item}</span>
          ))}
        </Title>
        <Title>photography</Title>
      </HeroContent>
      <HeroImages>
        <StaticImage
          src="../pexels-kaique-rocha-598917.jpg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          style={{ objectFit: "cover" }}
          loading="eager"
          alt="man with camera"
        />
        <StaticImage
          src="../pexels-cottonbro-3888218.jpg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          style={{ objectFit: "cover" }}
          loading="eager"
          alt="woman modelling"
        />
        <StaticImage
          src="../pexels-viresh-studio-1444442.jpg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          style={{ objectFit: "cover" }}
          loading="eager"
          alt="henna wedding"
        />
        <StaticImage
          src="../pexels-pixabay-265722.jpg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          style={{ objectFit: "cover" }}
          loading="eager"
          alt="pre-wedding"
        />
        <FooterWrapper>
          <SocialLink>2020, Zeha Photography, All Rights Reserved</SocialLink>
          {/* <SocialLink>INSTAGRAM</SocialLink>
          <SocialLink>TWITTER</SocialLink> */}
        </FooterWrapper>
      </HeroImages>
    </Wrapper>
  )
}

export default HeroSection
