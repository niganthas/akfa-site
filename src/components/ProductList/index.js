import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-slick'

import './style.scss'

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    activeProductId: null,
    animated: false,
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    const items = this.props.children.map(child => <div>{child}</div>)

    return (
      <div className="product-list">
        <div className="product-container">
          <Slider {...settings}>{items}</Slider>
        </div>
      </div>
    )
  }
}

ProductList.propTypes = {}

export default ProductList
