import React, { PureComponent } from 'react'

import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import './style.scss'

class ProfileNavi extends PureComponent {
  render() {
    const { cat, location, style, items, isSticky } = this.props
    const links = items.map((item, index) => {
      const href = '/' + cat + item.to
      return (
        <li key={index} className={location.pathname == href ? 'active' : ''}>
          <Link to={href}>
            <div className="profImg">
              <img src={item.img} alt={item.title} />
            </div>
            {item.title}
          </Link>
        </li>
      )
    })
    return (
      <div className="profile-nav" style={style}>
        {isSticky ? (
          <div className="mainMenuBtn">
            <Link to="/">
              <i className="fa fa-2x fa-home" />
            </Link>
          </div>
        ) : null}
        <ul>{links}</ul>
      </div>
    )
  }
}

ProfileNavi.propTypes = {}

export default ProfileNavi
