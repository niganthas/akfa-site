import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

class ProductItem extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    active: null,
  }

  render() {
    const color = `${getRandomInt(20, 200)}, ${getRandomInt(
      20,
      200
    )}, ${getRandomInt(20, 200)}`

    return (
      <div className="product-item">
        <div
          className="product-inner"
          style={{
            background: `rgba(${color},1)`,
            boxShadow: `0 0 150px rgba(${color},.4)`,
          }}
        >
          <div className="product-desc">
            <h4>7000 Пластиковый профиль</h4>
            <p className="sub-desc">
              Called when a new layout is created. This extension API is useful
              for programmatically manipulating layouts created by other plugins
            </p>
            <div className="btn-wrp" />
          </div>
          <div className="product-img">
            <img src={pathPrefix + '/img/profile.png'} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

ProductItem.propTypes = {}

export default ProductItem
