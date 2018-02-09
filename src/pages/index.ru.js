import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import '../styles/gatstrap.scss'
import 'animate.css/animate.css'
import '../styles/welcome.scss'

class IndexPageRu extends React.Component {
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
            Очень звездатый слоган, можно несколько
          </div>
          <div className="nav-large">
            <nav>
              <ul>
                <li>
                  <Link to="/ru/about/mission/">О компании</Link>
                </li>
                <li>
                  <Link to="/ru/production/">Продукция</Link>
                </li>
                <li>
                  <Link to="/ru/vakansy/">Вакансии</Link>
                </li>
                <li>
                  <Link to="/ru/partner/">Партнерство</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nav-small">
            <nav>
              <ul>
                <li>
                  <Link to="/en/about/mission/">Kompaniya</Link>
                </li>
                <li>
                  <Link to="/en/about/">Produksiya</Link>
                </li>
                <li>
                  <Link to="/en/about/">Vakansii</Link>
                </li>
                <li>
                  <Link to="/en/about/">Parnterstvo</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <footer className="welcome-footer">
          <div className="ft-block contacts">
            <div className="phone">
              <small>Тел.:</small> 998 71 <b>203 00 00</b>
            </div>
            <div>100126, г.Ташкент, Учтепинский район, ул. Хирмонтепа д-1</div>
            <div className="in-eng">
              <Link to="/en/">in english</Link>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexPageRuQuery {
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

export default IndexPageRu
