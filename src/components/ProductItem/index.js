import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import './style.scss'

const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.color = `
      ${getRandomInt(100, 250)},
      ${getRandomInt(100, 250)},
      ${getRandomInt(100, 250)}
    `
  }

  state = {
    active: false,
  }

  onEnterHandler(id) {
    this.setState({ active: !this.state.active })
    this.props.onEnter(id)
  }

  render() {
    const { id, title, desc } = this.props.data

    return (
      <div className={`product-item ${this.state.active ? 'active' : null}`}>
        <div
          className="product-inner"
          style={{
            background: `rgba(${this.color},1)`,
            boxShadow: `0 50px 50px rgba(${this.color},.2)`,
          }}
        >
          <div className="product-desc">
            <h4>{title}</h4>
            <p className="sub-desc">{desc}</p>
            <div className="btn-wrp">
              <button onClick={this.onEnterHandler.bind(this, id)}>
                <i className="fa fa-long-arrow-right fa-4x" />
              </button>
            </div>
          </div>
          <div className="product-img">
            <Slider>
              <div className="img-product">
                <img src={pathPrefix + '/img/profile.png'} alt="" />
              </div>
              <div className="img-product">
                <img src={pathPrefix + '/img/profile.png'} alt="" />
              </div>
              <div className="img-product">
                <img src={pathPrefix + '/img/profile.png'} alt="" />
              </div>
              <div className="img-product">
                <img src={pathPrefix + '/img/profile.png'} alt="" />
              </div>
            </Slider>
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
