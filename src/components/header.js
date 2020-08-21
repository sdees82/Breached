import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Hoodie from '../images/breached-logo-hoodie-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#0c0c0c`,
      padding: `1rem 0`,
      color: `#fff`,
      position: `sticky`,
      top: `0`,
      width: `100%`,
      // borderBottom: `1px solid rgba(255, 255, 255, 1)`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: `flex`,
        alignItems: `center`,
        padding: `0 1rem`
      }}
    >
      <div>
      <Link
        className="logo_home"
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `2rem`
          }}
        >
          <img src={Hoodie} style={{width: `2rem`, display: `block`, marginBottom: `0`}}/>
        </Link>
      </div>
       
       <div style={{marginLeft: 'auto'}}>
      <Link
      className="logo_home"
      to="https://twitter.com/taydees"
      style={{
        color: `white`,
        textDecoration: `none`,
        fontSize: `1.5rem`,
        marginRight: `1rem`
      }}
      >
      <FontAwesomeIcon icon={faTwitter}/>
      </Link>

      <Link
      className="logo_home"
      to="https://github.com/sdees82"
      style={{
        color: `white`,
        textDecoration: `none`,
        fontSize: `1.5rem`,
        marginRight: `1rem`
      }}
      >
      <FontAwesomeIcon icon={faGithub}/>
      </Link>

      <Link
      className="logo_home"
      to="https://www.linkedin.com/in/sean-dees/"
      style={{
        color: `white`,
        textDecoration: `none`,
        fontSize: `1.5rem`
      }}
      >
      <FontAwesomeIcon icon={faLinkedinIn}/>
      </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
