import React from "react"

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      © {year}, Built with
      {` `}
      <a href="https://www.ikode.io">Ikode</a>
    </footer>
  )
}

export default Footer
