import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-slick'

import './style.scss'

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <i className="fa fa-4x fa-angle-left" />
    </div>
  )
}

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <i className="fa fa-4x fa-angle-right" />
    </div>
  )
}

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    activeProductId: null,
    animated: false,
  }

  onEnter() {}

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: this.beforeChange,
    }
    // const childs = Children.map(this.props.children, (args) => {args.props.onEnter((id)=>{console.log('---', id)})});

    const items = this.props.children.map((child, index) => (
      <div key={index}>{child}</div>
    ))

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
