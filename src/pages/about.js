import React from "react"

import Seo from "../components/seo"

import About from "../components/about/about.component"
import GlobalStyle from "../globalStyles/globalStyles"

const AboutPage = () => {
  return (
    <>
      <GlobalStyle theme="purple" />
      <Seo title="Home" />
      <About />
    </>
  )
}
export default AboutPage
