import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import gsap, { Power0 } from "gsap"

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
    const title = heroRef.children[0].children[0]
    const photography = title.nextSibling
    const firstImage = heroRef.children[1].children[0]
    const secondImage = firstImage.nextSibling
    const thirdImage = heroRef.children[1].children[2]
    const fourthImage = heroRef.children[1].children[3]
    const footer = heroRef.children[1].children[4]

    // gsap.set([firstImage, secondImage, thirdImage, fourthImage], {
    //   position: "absolute",
    //   autoAlpha: 0,
    // })

    const tl = gsap.timeline()

    tl.add()
      .to(title.children, {
        y: "0%",
        autoAlpha: 1,
        stagger: {
          each: 0.2,
        },
      })
      .from(photography, {
        y: "100%",
        autoAlpha: 0,
      })
      // .from([firstImage, secondImage, thirdImage, fourthImage], {
      //   position: "absolute",
      // })
      .to(
        [firstImage, secondImage, thirdImage, fourthImage],
        {
          autoAlpha: 1,
        },
        "s"
      )
      .to(
        secondImage,
        {
          rotate: "15deg",
          ease: Power0.easeInOut,
          duration: 1,
        },
        "s"
      )
      .to(
        thirdImage,
        {
          rotate: "10deg",
          ease: Power0.easeInOut,
        },
        "s"
      )
      .to(
        firstImage,
        {
          rotate: "-15deg",
          ease: Power0.easeInOut,
        },
        "s"
      )
      .from([firstImage, secondImage, thirdImage, fourthImage], {
        left: "50%",
        top: "50%",
        y: "-50%",
        x: "-50%",
        zIndex: 2,
      })
      .from(footer, {
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
          src="../../images/pexels-kaique-rocha-598917.jpg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          style={{ objectFit: "cover" }}
          loading="eager"
          alt="man with camera"
        />
        <StaticImage
          src="../../images/pexels-cottonbro-3888218.jpg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          style={{ objectFit: "cover" }}
          loading="eager"
          alt="woman modelling"
        />
        <StaticImage
          src="../../images/pexels-viresh-studio-1444442.jpg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          style={{ objectFit: "cover" }}
          loading="eager"
          alt="henna wedding"
        />
        <StaticImage
          src="../../images/pexels-pixabay-265722.jpg"
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
