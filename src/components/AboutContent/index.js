import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StickyContainer, Sticky } from 'react-sticky'

import InnerNavi from '../InnerNavi'
import transition from '../../decorators/transition'

class AboutContent extends Component {
  render() {
    const { data, location, style } = this.props
    return (
      <div className="content-wrp">
        <h1>{data.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.content.childMarkdownRemark.html,
          }}
        />
      </div>
    )
  }
}

AboutContent.defaultProps = {
  transitionStyle: '',
}

export default AboutContent
