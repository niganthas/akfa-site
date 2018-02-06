import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import Helmet from 'react-helmet'

const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

const aboutAd = ({ transition, location, data }) => {
  const site = get(data, 'site.siteMetadata')
  return (
    <div className="aboutIndexPage" style={transition && transition.style}>
      <Helmet title={'Реклама' + ' - ' + get(site, 'title')} />
      <div className="content-wrp">
        <h1>Реклама</h1>
        <p>
          <img src={pathPrefix + '/img/IMS.jpg'} alt="" />
        </p>
      </div>
    </div>
  )
}

aboutAd.propTypes = {}

export default aboutAd
