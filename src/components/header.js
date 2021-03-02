import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Logo from "../assets/img/fcs-escudo.jpg"
import FacebookLogo from "../assets/img/facebook.svg"
import InstagramLogo from "../assets/img/instagram.svg"

export const Header = ({ title }) => {
  const {
    menuItems: { edges: menu },
  } = useStaticQuery(graphql`
    query MyQuery {
      menuItems: allWpMenuItem(sort: { fields: [order] }) {
        edges {
          node {
            id
            url
            label
          }
        }
      }
    }
  `)
  return (
    <header className="global-header">
      <Link to="/">
        <img src={Logo} alt="Junta Central Fallera" />
      </Link>
      <nav>
        <div className="nav-social">
          <a href="https://www.facebook.com/Falla.Castellon" target="_blank">
            <img src={FacebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/fallacastellon/" target="_blank">
            <img src={InstagramLogo} alt="Facebook" />
          </a>
        </div>
        <div class="nav-menu">
          {menu.map(({ node: { label, url, id } }) => (
            <Link key={id} to={url}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
