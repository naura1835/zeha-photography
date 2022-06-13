import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"

import { Wrapper } from "./cursor.styles"

const Cursor = () => {
  let mouseRef = useRef(null)
  let navLinks = useRef([])

  useEffect(() => {
    navLinks = document.querySelectorAll("a, button, img, Link")
    console.log(navLinks)
    window.addEventListener("mouseout", () => {
      gsap.set(".cursor", {
        autoAlpha: 0,
      })
    })

    window.addEventListener("mousemove", e => {
      gsap.set(".cursor", {
        autoAlpha: 1,
        scale: 0.3,
      })
      // const { clientX, clientY } = e

      // const mouseX = clientX - mouseRef.current.clientWidth / 2
      // const mouseY = clientY - mouseRef.current.clientHeight / 2

      mouseRef.current.style.top = e.pageY + "px"
      mouseRef.current.style.left = e.pageX + "px"
      // transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
    navLinks.forEach(navLink => {
      navLink.addEventListener("mouseleave", () => {
        gsap.to(mouseRef.current, {
          css: {
            scale: 0.3,
            borderColor: "#434a42",
          },
        })
      })
      navLink.addEventListener("mouseover", () => {
        gsap.to(mouseRef.current, {
          css: {
            scale: 1.5,
            borderColor: "#fff",
          },
        })
      })
    })
  }, [])

  return <Wrapper ref={mouseRef} className="cursor"></Wrapper>
}
export default Cursor
