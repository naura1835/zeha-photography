import React, { useEffect } from "react"
// import { useStaticQuery, graphql } from "gatsby"

import Seo from "../components/seo"

import GlobalStyle from "../globalStyles/globalStyles"
import HeroSection from "../components/heroSection/heroSection.component"
import Layout from "../components/layout"

const IndexPage = () => {
  useEffect(() => {
    return () => {}
  })
  return (
    <Layout>
      <GlobalStyle theme="purple" />
      <Seo title="Home" />
      <HeroSection />
    </Layout>
  )
}

export default IndexPage
