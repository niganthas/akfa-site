import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductList from '../../components/ProductList'
import ProductItem from '../../components/ProductItem'
import Link from 'gatsby-link'

class Products extends Component {
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
          <ProductList>
            <ProductItem data={{}} />
            <ProductItem data={{}} />
            <ProductItem data={{}} />
            <ProductItem data={{}} />
            <ProductItem data={{}} />
            <ProductItem data={{}} />
          </ProductList>
        </div>
      </div>
    )
  }
}

Products.propTypes = {}

export default Products
