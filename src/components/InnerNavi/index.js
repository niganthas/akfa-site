import React, { PureComponent } from 'react'

import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import './style.scss'

class InnerNavi extends PureComponent {
  render() {
    const { cat, location, style, items, isSticky, lang } = this.props
    const links = items.map((item, index) => {
      const href = `/${lang}/${cat}${item.to}`
      return (
        <li key={index} className={location.pathname == href ? 'active' : ''}>
          <Link to={href}>
            <FormattedMessage id={item.title} />
          </Link>
        </li>
      )
    })
    return (
      <div className="inner-nav" style={style}>
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
//
// const InnerNavi = props => {
//   const { cat, location, style } = props
//   const items = props.items.map((item, index) => {
//     const href = '/' + cat + item.to
//     return (
//       <li key={index} className={location.pathname == href ? 'active' : ''}>
//         <Link to={href}>{item.title}</Link>
//       </li>
//     )
//   })
//   return (
//     <div className="inner-nav" style={{ style, background: '#ccc' }}>
//       <ul>{items}</ul>
//     </div>
//   )
// }

InnerNavi.propTypes = {}

export default InnerNavi
