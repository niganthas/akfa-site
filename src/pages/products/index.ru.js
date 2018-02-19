import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductItem from '../../components/ProductItem'
import Link from 'gatsby-link'
import Slider from 'react-slick'

let activeItem = null
let isAnimate = false
const data = [
  {
    id: '1',
    title: 'Quattro 5000',
    desc: 'Четырех камерный ПВХ профиль',
  },
  {
    id: '2',
    title: 'Quattro 6000',
    desc: 'Четырех камерный ПВХ профиль',
  },
  {
    id: '3',
    title: 'Quattro 7000',
    desc: 'Четырех камерный ПВХ профиль',
  },
  {
    id: '4',
    title: 'Quattro 8000',
    desc: 'Четырех камерный ПВХ профиль',
  },
  {
    id: '5',
    title: 'Quattro 9000',
    desc: 'Четырех камерный ПВХ профиль',
  },
]

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} ${activeItem == null ? '' : 'active'}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fa fa-4x fa-angle-left" />
    </div>
  )
}

function NextArrow(props) {
  const { className, style, onClick } = props

  return (
    <div
      className={`${className} ${activeItem == null ? '' : 'active'}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fa fa-4x fa-angle-right" />
    </div>
  )
}

class Products extends Component {
  state = {
    activeItem: null,
    isAnimate: false,
    current: 1,
    isAnimate: false,
  }

  onItemEnter(id) {
    this.setState({ activeItem: this.state.activeItem == id ? null : id })
  }

  ProductElements() {
    return data.map((item, index) => (
      <div key={index}>
        <ProductItem
          onEnter={this.onItemEnter.bind(this)}
          data={item}
          key={index}
        />
      </div>
    ))
  }

  beforeChange(newIndex, oldIndex) {
    console.log(newIndex, oldIndex)
    this.setState({
      current: newIndex,
      isAnimate: true,
    })
  }

  afterChange() {
    this.setState({
      isAnimate: false,
    })
  }

  render() {
    activeItem = this.state.activeItem
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      draggable: this.state.activeItem == null,
      touchMove: this.state.activeItem == null,
      accessibility: this.state.activeItem == null,
      customPaging: i => {
        return (
          <span className={`${activeItem == null ? '' : 'hide'}`}>
            0{i + 1} <div>0{data.length}</div>
          </span>
        )
      },
    }
    return (
      <div className="inner-page container">
        <div className={`product-navi ${activeItem == null ? '' : 'active'}`}>
          <ul>
            <li className="active">
              <Link to="/">Пвх профили</Link>
            </li>
            <li>
              <Link to="/">Алюминиевые профили</Link>
            </li>
            <li>
              <Link to="/">Фасадные системы</Link>
            </li>
            <li>
              <Link to="/">Радиаторы отопления</Link>
            </li>
            <li>
              <Link to="/">Композитные панели</Link>
            </li>
            <li>
              <Link to="/">Фурнитура и аксессуары</Link>
            </li>
          </ul>
        </div>
        <div className="product-wrp">
          <div className="product-list">
            <div className="product-container">
              <Slider {...settings}>{this.ProductElements()}</Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Products.propTypes = {}

export default Products
