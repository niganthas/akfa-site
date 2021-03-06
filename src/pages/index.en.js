import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import '../styles/gatstrap.scss'
import 'animate.css/animate.css'
import '../styles/welcome.scss'

class IndexPageEn extends React.Component {
  render() {
    const pageLinks = []
    const site = get(this, 'props.data.site.siteMetadata')
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div className="welcome-page">
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
              content: `${get(site, 'url')}/img/logo.jpg`,
            },
          ]}
        />
        <div className="container">
          <div className="bigLogo">
            <img src={pathPrefix + '/img/logo.svg'} alt="" />
          </div>
          <div className="akfa-slogan">
            Very stellar slogan, you can several
          </div>
          <div className="nav-large">
            <nav>
              <ul>
                <li>
                  <Link to="/en/about/mission/">About company</Link>
                </li>
                <li>
                  <Link to="/en/production/">Production</Link>
                </li>
                <li>
                  <Link to="/en/vakansy/">Career</Link>
                </li>
                <li>
                  <Link to="/en/partner/">Partnership</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nav-small">
            <nav>
              <ul>
                <li>
                  <Link to="/ru/about/">О компании</Link>
                </li>
                <li>
                  <Link to="/ru/about/">Продукция</Link>
                </li>
                <li>
                  <Link to="/ru/about/">Вакансии</Link>
                </li>
                <li>
                  <Link to="/ru/about/">Партнерство</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <footer className="welcome-footer">
          <div className="ft-block contacts">
            <div className="phone">
              <small>Phone:</small> 998 71 <b>203 00 00</b>
            </div>
            <div>100126, г.Ташкент, Учтепинский район, ул. Хирмонтепа д-1</div>
            <div className="in-eng">
              <Link to="/ru/">in russian</Link>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexPageEnQuery {
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

export default IndexPageEn
