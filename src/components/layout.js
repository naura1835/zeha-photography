import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header/header.component"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ height: "10vh" }}>
        <Header />
      </div>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
