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

class AboutTemplate extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  getTpl(childs) {
    const { location, data, children } = this.props
    return (
      <div className="inner-page">
        <div className="innerHeader">
          <div className="text-center inner-title">О компании</div>
        </div>
        <div className="container">
          <StickyContainer>
            <div className="row">
              <div className="col-sm-3">
                <Sticky topOffset={80}>
                  {({
                    style,

                    // the following are also available but unused in this example
                    isSticky,
                    wasSticky,
                    distanceFromTop,
                    distanceFromBottom,
                    calculatedHeight
                  }) => {
                    return (
                      <InnerNavi
                        isSticky={isSticky}
                        style={style}
                        cat="about"
                        location={location}
                        items={[
                          { to: '/', title: 'Наша миссия' },
                          { to: '/history/', title: 'История' },
                          { to: '/production/', title: 'Произвоство' },
                          { to: '/ad/', title: 'Реклама' }
                        ]}
                      />
                    )
                  }}
                </Sticky>
              </div>
              <div className="col-sm-9">{children()}</div>
            </div>
          </StickyContainer>
        </div>
      </div>
    )
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
              content: `${get(site, 'url')}/img/profile.jpg`
            }
          ]}
        />
        <SiteNavi title={siteMetadata.title} {...this.props} />
        {this.getTpl()}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query AboutPageQuery {
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

export default AboutTemplate
