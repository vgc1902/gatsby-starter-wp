import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Logo from "../assets/img/logo-jcf.png"

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
        {menu.map(({ node: { label, url, id } }) => (
          <Link key={id} to={url}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
