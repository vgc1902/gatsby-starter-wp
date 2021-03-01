import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

export const Header = ({ title, isHome }) => {
  return (
    <header className="global-header">
      {isHome ? (
        <h1 className="main-heading">
          <Link to="/">{parse(title)}</Link>
        </h1>
      ) : (
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      )}
    </header>
  )
}

export default Header
