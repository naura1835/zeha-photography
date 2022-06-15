import React from "react"

import Seo from "../components/seo"

import About from "../components/about/about.component"
import GlobalStyle from "../globalStyles/globalStyles"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <GlobalStyle theme="purple" />
      <Seo title="Home" />
      <About />
    </Layout>
  )
}
export default AboutPage
