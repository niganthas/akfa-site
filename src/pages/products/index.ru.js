import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductList from '../../components/ProductList'
import ProductItem from '../../components/ProductItem'
import Link from 'gatsby-link'

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

class Products extends Component {
  ProductElements() {
    return data.map((item, index) => (
      <ProductItem onEnter={id => console.log(id)} data={item} key={index} />
    ))
  }

  render() {
    return (
      <div className="inner-page container">
        <div className="product-navi">
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
          <ProductList>{this.ProductElements()}</ProductList>
        </div>
      </div>
    )
  }
}

Products.propTypes = {}

export default Products
