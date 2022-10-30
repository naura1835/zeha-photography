import React from "react"

import Seo from "../components/seo"

import GlobalStyle from "../globalStyles/globalStyles"
import HeroSection from "../components/heroSection/heroSection.component"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <GlobalStyle theme="purple" />
      <Seo title="Home" />
      <HeroSection />
    </Layout>
  )
}

export default IndexPage
