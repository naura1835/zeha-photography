import React from "react"
import { ThemeProvider } from "styled-components"

import { Line, MenuWrapper } from "./menu.styles"

const MenuIcon = ({ menu, whiteBg }) => {
  const theme = {
    mainColor: "#000",
    altColor: "#fff",
  }
  return (
    <ThemeProvider theme={theme}>
      <MenuWrapper>
        <Line
          menu={menu}
          whiteBg={whiteBg}
          className={`line ${menu ? "active" : null}`}
        ></Line>
        <Line
          menu={menu}
          whiteBg={whiteBg}
          className={`line ${menu ? "active" : null}`}
        ></Line>
      </MenuWrapper>
    </ThemeProvider>
  )
}

export default MenuIcon
