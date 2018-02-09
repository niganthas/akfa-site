import React from 'react'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

import './style.scss'

class SiteNavi extends React.Component {
  render() {
    const { url, langKey } = this.props
    const engUrl = '/en/' + url.substr(4)
    const ruUrl = '/ru/' + url.substr(4)

    return (
      <nav className="navbar navbar-expand flex-column flex-md-row">
        <div className="container">
          <Link className="text-center home-link" to="/">
            <img src="/img/logo.svg" alt="" />
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  url.indexOf('about') >= 1 ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to={`/${langKey}/about/mission/`} className="nav-link">
                  <FormattedMessage id="aboutCompany" />
                </Link>
              </li>
              <li className={url === '//' ? 'nav-item active' : 'nav-item'}>
                <Link to={`/${langKey}/products/`} className="nav-link">
                  <FormattedMessage id="products" />
                </Link>
              </li>
              <li className={url === '//' ? 'nav-item active' : 'nav-item'}>
                <Link to={`/${langKey}/vacancies/`} className="nav-link">
                  <FormattedMessage id="vacancies" />
                </Link>
              </li>
              <li className={url === '//' ? 'nav-item active' : 'nav-item'}>
                <Link to={`/${langKey}/partnership/`} className="nav-link">
                  <FormattedMessage id="partnership" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <ul className="langSwitcher">
              <li>
                <Link to={engUrl}>en</Link>
              </li>
              <li>
                <Link to={ruUrl}>ru</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default SiteNavi
