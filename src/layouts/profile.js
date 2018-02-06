import React from 'react'
import Link from 'gatsby-link'
import emergence from 'emergence.js'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { StickyContainer, Sticky } from 'react-sticky'

import ProfileNavi from '../components/ProfileNavi'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'

import './gatstrap.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'font-awesome/css/font-awesome.css'
import './main.scss'

const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

class ProfileTemplate extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  getTpl(childs) {
    const { location, data, children } = this.props
    return (
      <div className="inner-page profile-wrp">
        <div className="profileNaviWrp">
          <ProfileNavi
            cat="about"
            location={location}
            items={[
              { to: '/', title: '7000', img: pathPrefix + '/img/profile.jpg' },
              { to: '/', title: '8000', img: pathPrefix + '/img/profile.jpg' },
              { to: '/', title: '9000', img: pathPrefix + '/img/profile.jpg' },
              { to: '/', title: '5000', img: pathPrefix + '/img/profile.jpg' },
              {
                to: '/',
                title: 'Tata 5000',
                img: pathPrefix + '/img/profile.jpg',
              },
              {
                to: '/',
                title: 'ITS 5000',
                img: pathPrefix + '/img/profile.jpg',
              },
            ]}
          />
        </div>

        <div className="profilesPage">{children()}</div>
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
              content: `${get(site, 'url')}/img/logo.svg`,
            },
          ]}
        />
        <SiteNavi title={siteMetadata.title} {...this.props} />
        {this.getTpl()}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query ProfilePageQuery {
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

export default ProfileTemplate
