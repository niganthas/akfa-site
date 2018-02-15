import React from 'react'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'
import { HamburgerButton } from 'react-hamburger-button'

import './style.scss'

class SiteNavi extends React.Component {
  state = {
    open: false,
  }

  handleClick() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { url, langKey } = this.props
    const engUrl = '/en/' + url.substr(4)
    const ruUrl = '/ru/' + url.substr(4)

    return (
      <div className="container">
        <nav className="navbar navbar-expand flex-column flex-md-row">
          <Link className="text-center home-link" to="/">
            <img src="/img/logo.svg" alt="" />
          </Link>
          <div className="navbar-nav-scroll" />
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <ul className="navbar-nav bd-navbar-nav flex-row">
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
                <Link to={`/${langKey}/news/`} className="nav-link">
                  <FormattedMessage id="news" />
                </Link>
              </li>
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
                <Link to={`/${langKey}/contacts/`} className="nav-link">
                  <FormattedMessage id="contacts" />
                </Link>
              </li>
            </ul>
            <div className="menu-button">
              <HamburgerButton
                open={this.state.open}
                onClick={this.handleClick.bind(this)}
                width={35}
                height={20}
                strokeWidth={2}
                color="#495057"
                animationDuration={0.3}
              />
            </div>

            {/*<ul className="langSwitcher">*/}
            {/*<li>*/}
            {/*<Link to={engUrl}>en</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<Link to={ruUrl}>ru</Link>*/}
            {/*</li>*/}
            {/*</ul>*/}
          </div>
        </nav>
      </div>
    )
  }
}

export default SiteNavi
