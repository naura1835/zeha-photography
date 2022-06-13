import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Seo from "../components/seo"
import GlobalStyle from "../globalStyles/globalStyles"
import { BodyMainText, TitleDisplay } from "../globalStyles/textStyles"

function NotFoundPage() {
  return (
    <>
      <GlobalStyle theme="purple" />
      <Seo title="404: Not found" />
      <Wrapper>
        <Text>404</Text>
        <Caption>
          OOOPS! Looks like the page you are looking for is missing.
        </Caption>
        <Link to="/index" style={{ textDecoration: "none", color: "#fff" }}>
          <Caption>Let's head home.</Caption>
        </Link>
      </Wrapper>
    </>
  )
}

export default NotFoundPage
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Text = styled(TitleDisplay)`
  font-size: 400px;
  margin-bottom: -10vh;
`
const Caption = styled(BodyMainText)`
  margin-bottom: 2vh;
`
