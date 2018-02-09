import React from 'react'
import Link from 'gatsby-link'
import emergence from 'emergence.js'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'

import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'
import 'intl'

import '../styles/gatstrap.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'font-awesome/css/font-awesome.css'
import '../styles/main.scss'

class Template extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    // emergence.init()
  }

  render() {
    const { location, children, data, i18nMessages } = this.props
    const site = get(data, 'site.siteMetadata')

    const url = location.pathname
    const { langs, defaultLangKey } = data.site.siteMetadata.languages
    const langKey = getCurrentLangKey(langs, defaultLangKey, url)
    const homeLink = `/${langKey}/`

    return (
      <IntlProvider locale={langKey} messages={i18nMessages}>
        <div>
          <Helmet
            title={get(site, 'title')}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          {url !== homeLink ? (
            <SiteNavi langKey={langKey} url={this.props.location.pathname} />
          ) : null}
          {children()}
        </div>
      </IntlProvider>
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
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`

export default Template
