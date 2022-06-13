import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import gsap from "gsap"

import Contact from "../contact/contact.component"
import MenuIcon from "../menu/menu.component"

import {
  ContactWrapper,
  HeaderWrapper,
  Logo,
  Menu,
  MenuItem,
  MenuItems,
  MenuWrapper,
  MenuIconWrapper,
  MenuDiv,
} from "./header.styles"

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [whiteBg, isWhiteBg] = useState(false)

  let menuRef = useRef(null)

  useEffect(() => {
    const menuInfo = menuRef.children[0].children[0]
    const firstMenuItem = menuRef.children[0].children[1].children[0]
    const secondMenuItem = firstMenuItem.nextSibling
    const thirdMenuItem = secondMenuItem.nextSibling

    const tl = gsap.timeline()

    if (window.location.pathname.includes(`works/`)) {
      isWhiteBg(true)
    } else {
      isWhiteBg(false)
    }

    if (menu === false) {
      document.body.style.overflow = "scroll"

      tl.to(
        menuInfo,
        {
          y: window.innerWidth > 480 ? 60 : -60,
          autoAlpha: 0,
          duration: 0.5,
          delay: window.innerWidth > 480 ? 0.2 : 0.8,
          ease: "Power3.easeInOut",
        },
        "end"
      )
        .to(
          [firstMenuItem, secondMenuItem, thirdMenuItem],
          {
            duration: 0.5,
            delay: 0.1,
            y: -100,
            autoAlpha: 0,
            ease: "Power3.easeInOut",
            stagger: {
              amount: 0.3,
            },
          },
          "end"
        )
        .to(menuRef, {
          duration: 1,
          delay: 0.2,
          ease: "Power3.easeInOut",
          css: {
            display: "none",
            height: "0vh",
            padding: 0,
          },
          transformOrigin: "bottom",
        })
    } else if (menu === true) {
      document.body.style.overflow = "hidden"
      gsap.set(menuInfo, {
        y: 60,
        autoAlpha: 0,
      })
      gsap.set([firstMenuItem, secondMenuItem, thirdMenuItem], {
        y: 100,
        autoAlpha: 0,
      })

      tl.to(menuRef, {
        duration: 0.8,
        ease: "Power3.easeInOut",
        css: {
          display: "block",
          height: "100vh",
          // padding: "10%",
          padding: window.innerWidth > 480 ? "10%" : "10% 5%",
        },
        transformOrigin: "top",
      })
        .to(
          menuInfo,
          {
            duration: 1,
            delay: window.innerWidth > 480 ? 0.2 : 0.8,
            y: 0,
            autoAlpha: 1,
            ease: "Power3.easeInOut",
          },
          "s"
        )
        .to(
          [firstMenuItem, secondMenuItem, thirdMenuItem],
          {
            duration: 0.8,
            delay: 0.1,
            y: 0,
            autoAlpha: 1,
            ease: "Power3.easeInOut",
            stagger: window.innerWidth > 480 ? 0.3 : 0.2,
          },
          "s"
        )
    }
  }, [menu])

  const disabledMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 2400)
  }
  const handleMenu = () => {
    disabledMenu()
    if (menu) {
      setMenu(!menu)
    } else {
      setMenu(!menu)
    }
  }

  return (
    <HeaderWrapper className="header">
      <MenuWrapper>
        <Logo menu={menu} whiteBg={whiteBg}>
          <Link to="/" className={`logo ${menu ? "active" : null}`}>
            Zeha
          </Link>
        </Logo>
        <MenuIconWrapper disabled={disabled} onClick={handleMenu}>
          <MenuIcon menu={menu} whiteBg={whiteBg} />
        </MenuIconWrapper>
      </MenuWrapper>
      <Menu menu={menu} ref={el => (menuRef = el)}>
        <MenuDiv>
          <ContactWrapper>
            <Contact />
          </ContactWrapper>
          <MenuItems style={{ width: "50%" }}>
            <MenuItem
              onClick={() => {
                setMenu(!menu)
              }}
            >
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setMenu(!menu)
              }}
            >
              <Link to="/about">About</Link>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setMenu(!menu)
              }}
            >
              <Link to="/works">Works</Link>
            </MenuItem>
          </MenuItems>
        </MenuDiv>
      </Menu>
    </HeaderWrapper>
  )
}
export default Header
