import React, { useEffect } from "react"
// import { useStaticQuery, graphql } from "gatsby"

import Seo from "../components/seo"

import GlobalStyle from "../globalStyles/globalStyles"
import HeroSection from "../components/heroSection/heroSection.component"

const IndexPage = () => {
  useEffect(() => {
    return () => {}
  })
  return (
    <>
      <GlobalStyle theme="purple" />
      <Seo title="Home" />
      <HeroSection />
    </>
  )
}

export default IndexPage
