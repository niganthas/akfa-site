import React from 'react'
import Link from 'gatsby-link'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand flex-column flex-md-row">
        <div className="container">
          <Link className="text-center home-link" to="/">
            <img src="/img/logo.svg" alt=""/>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/about/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/about/" className="nav-link">
                  О компании
                </Link>
              </li>
              <li
                className={
                  location.pathname === '//'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/profile/" className="nav-link">
                  Продукция
                </Link>
              </li>
              <li
                  className={
                      location.pathname === '//'
                          ? 'nav-item active'
                          : 'nav-item'
                  }
              >
                <Link to="/profile/" className="nav-link">
                  Вакансии
                </Link>
              </li>
              <li
                  className={
                      location.pathname === '//'
                          ? 'nav-item active'
                          : 'nav-item'
                  }
              >
                <Link to="/profile/" className="nav-link">
                  Партнерство
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default SiteNavi
