import React from "react"
import { Link } from "react-router-dom"

import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <ul className="footer-list">
          <Link className="footer-link" to='/mentionslegales'>Mentions Légales</Link>
          <Link className="footer-link" to='/proprietesintellectuelles'>Propriété intellectuelle et contrefaçons</Link>
          <p className="footer-link">© Copyright 2023 Au café du français</p>
        </ul>
      </div>
    </div>
  )
}

export default Footer
