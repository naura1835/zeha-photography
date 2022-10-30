import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: ${props =>
          props.theme === "purple" ? "rgba(0, 0, 0, 0.87)" : "#ffffff"};
        color: ${props => (props.theme === "purple" ? "#ffffff" : "#000000")};
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
    .header{
      background: ${props =>
        props.theme === "purple"
          ? "transparent"
          : "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))"};
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
    a, #link{
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
      }
      .logo {
          color: ${props => (props.theme === "white" ? "#000000" : "#fff")} ;
          }
        .line{
          background-color: ${props =>
            props.theme === "white" ? "#000000" : "#fff"} ;
        }
`

export default GlobalStyle
