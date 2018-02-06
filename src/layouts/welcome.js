import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'
import emergence from 'emergence.js'

import './gatstrap.scss'
import 'animate.css/animate.css'
import './welcome.scss'
// import 'prismjs/themes/prism-okaidia.css'
// import 'devicon/devicon.min.css'
// import 'font-awesome/css/font-awesome.css'

class Template extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { location, children, transition } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div className="welcome-page">
        <div className="container">
          <div className="bigLogo">
            <img src={pathPrefix + '/img/logo.svg'} alt="" />
          </div>
          <div className="akfa-slogan">
            Очень звездатый, слоган можно несколько
          </div>
          <div className="nav-large">
            <nav>
              <ul>
                <li>
                  <Link to="/about/">О компании</Link>
                </li>
                <li>
                  <Link to="/production/">Продукция</Link>
                </li>
                <li>
                  <Link to="/vakansy/">Вакансии</Link>
                </li>
                <li>
                  <Link to="/partner/">Партнерство</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nav-small">
            <nav>
              <ul>
                <li>
                  <Link to={{}}>Kompaniya</Link>
                </li>
                <li>
                  <Link to={{}}>Produksiya</Link>
                </li>
                <li>
                  <Link to={{}}>Vakansii</Link>
                </li>
                <li>
                  <Link to={{}}>Parnterstvo</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <footer className="welcome-footer">
          <div className="ft-block contacts">
            <div className="phone">
              <small>Тел.:</small> 998 71 <b>203 00 00</b>
            </div>
            <div>100126, г.Ташкент, Учтепинский район, ул. Хирмонтепа д-1</div>
            <div className="in-eng">
              <Link to={{}}>in english</Link>
            </div>
          </div>
        </footer>
        {children()}
      </div>
    )
  }
}

export default Template
