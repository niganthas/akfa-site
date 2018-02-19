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

    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div className={`product-item ${this.state.active ? 'active' : null}`}>
        <div
          className="product-inner"
          style={{
            background: `rgba(${this.color},1)`,
          }}
        >
          <div className="product-desc">
            <h4>{title}</h4>
            <p className="sub-desc">{desc}</p>
            <div className="properties">
              <p>Характеристики:</p>
              <ul>
                <li>
                  Монтажная глубина <span>60 мм</span>
                </li>
                <li>
                  Количество камер <span>4</span>
                </li>
                <li>
                  Толщина стенок профиля <span>2.2-2.0 мм</span>
                </li>
                <li>
                  Декорирование: <span>Белый, ламинирование</span>
                </li>
                <li>
                  Толщина остекления: <span>4-22 мм</span>
                </li>
                <li>
                  Размер фурнитурного паза: <span>9 мм</span>
                </li>
              </ul>
            </div>
            <div className="colors">
              <p>Цветовая гамма:</p>
              <ul>
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
            <div className="btn-wrp">
              <button onClick={this.onEnterHandler.bind(this, id)}>
                <i className="fa fa-long-arrow-right fa-4x" />
              </button>
            </div>
          </div>
          <div className="product-img">
            <Slider {...settings}>
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
