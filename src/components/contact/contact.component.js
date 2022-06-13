import React from "react"

// import { StaticImage } from "gatsby-plugin-image"

import logo from "../../images/group-16.svg"
import instagram from "../../images/icons/instagram.svg"
import twitter from "../../images/icons/twitter.svg"

import {
  CompanyName,
  Details,
  Description,
  IconWrapper,
  LogoImg,
  SocialMedia,
  Title,
} from "./contact.style"

const Contact = () => {
  return (
    <>
      <LogoImg src={logo} />
      <CompanyName>Zeha photography</CompanyName>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ex
        dui. Sed ultricies, purus sit amet placerat pellentesque, odio metus
        vestibulum tellus
      </Description>
      <SocialMedia>
        <Title>Work with us</Title>
        <Title>Follow us</Title>
        <Details>+234-99126534</Details>
        <IconWrapper>
          <a href="/">
            <img src={instagram} />
          </a>
          <a href="/">
            <img src={twitter} />
          </a>
        </IconWrapper>
      </SocialMedia>
      {/* <StaticImage
          src="../../images/group-16.svg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          style={{ objectFit: "cover" }}
          loading="eager"
          alt="man with camera"
        /> */}
    </>
  )
}
export default Contact
