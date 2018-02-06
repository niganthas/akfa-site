import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import Helmet from 'react-helmet'

const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

const aboutProduction = ({ transition, location, data }) => {
  const site = get(data, 'site.siteMetadata')
  return (
    <div className="aboutIndexPage" style={transition && transition.style}>
      <Helmet title={'Производство' + ' - ' + get(site, 'title')} />
      <div className="content-wrp">
        <h1>Производство</h1>
        <p>
          <img src={pathPrefix + '/img/mission.jpg'} alt="" />
        </p>
      </div>
    </div>
  )
}

aboutProduction.propTypes = {}

export default aboutProduction
