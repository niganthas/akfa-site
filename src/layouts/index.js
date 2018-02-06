import React from 'react'
import Link from 'gatsby-link'
import emergence from 'emergence.js'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { StickyContainer, Sticky } from 'react-sticky'

import InnerNavi from '../components/InnerNavi'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'

import './gatstrap.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'font-awesome/css/font-awesome.css'
import './main.scss'

class Template extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { location, children, data } = this.props
    const site = get(data, 'site.siteMetadata')

    return (
      <div>
        <Helmet
          title={get(site, 'title')}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: `@${get(site, 'twitter')}` },
            { property: 'og:title', content: get(site, 'title') },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: get(site, 'description') },
            { property: 'og:url', content: get(site, 'url') },
            {
              property: 'og:image',
              content: `${get(site, 'url')}/img/profile.jpg`,
            },
          ]}
        />
        <SiteNavi title={siteMetadata.title} {...this.props} />
        {children()}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query MainPageQuery {
    site {
      siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
  }
`

export default Template
