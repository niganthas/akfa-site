import React from 'react'
import Link from 'gatsby-link'
import emergence from 'emergence.js'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { StickyContainer, Sticky } from 'react-sticky'

import InnerNavi from '../components/InnerNavi'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'

import { getCurrentLangKey } from 'ptz-i18n'
import Locale from '../components/Locale'
import { FormattedMessage } from 'react-intl'

import '../styles/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import '../styles/main.scss'

class AboutTemplate extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { location, children, data, i18nMessages } = this.props
    const site = get(data, 'site.siteMetadata')
    const { title, languages } = get(this, 'props.data.site.siteMetadata')
    const langKey = getCurrentLangKey(
      languages.langs,
      languages.defaultLangKey,
      this.props.location.pathname
    )

    return (
      <Locale langKey={langKey}>
        <div>
          <Helmet
            title={get(site, 'title')}
            meta={[
              { name: 'twitter:card', content: 'summary' },
              { name: 'twitter:site', content: `@${get(site, 'twitter')}` },
              { property: 'og:title', content: get(site, 'title') },
              { property: 'og:type', content: 'website' },
              {
                property: 'og:description',
                content: get(site, 'description'),
              },
              { property: 'og:url', content: get(site, 'url') },
              {
                property: 'og:image',
                content: `${get(site, 'url')}/img/profile.jpg`,
              },
            ]}
          />
          <SiteNavi langKey={langKey} url={this.props.location.pathname} />

          <div className="inner-page">
            <div className="innerHeader">
              <div className="text-center inner-title">
                <FormattedMessage id="aboutCompany" />
              </div>
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
                        calculatedHeight,
                      }) => {
                        return (
                          <InnerNavi
                            isSticky={isSticky}
                            style={style}
                            cat="about"
                            lang={langKey}
                            location={location}
                            items={[
                              { to: '/mission/', title: 'ourMission' },
                              { to: '/history/', title: 'ourHistory' },
                              { to: '/production/', title: 'production' },
                              { to: '/ad/', title: 'ad' },
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
        </div>
      </Locale>
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
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`

export default AboutTemplate
