import { get, findIndex } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky'
import { getCurrentLangKey } from 'ptz-i18n'
import AboutContent from '../components/AboutContent'
// import striptags from 'striptags'

import InnerNavi from '../components/InnerNavi'

class AboutTemplateEn extends React.Component {
  constructor(props) {
    super(props)

    this.pages = this.props.data.allContentfulAboutPage.edges
  }

  render() {
    const { title, languages } = get(this, 'props.data.site.siteMetadata')
    const langKey = getCurrentLangKey(
      languages.langs,
      languages.defaultLangKey,
      this.props.location.pathname
    )

    const pageIndex = findIndex(this.pages, function(o) {
      return o.node.node_locale == langKey
    })
    const page = this.pages[pageIndex].node

    return (
      <div className="content-wrp aboutContent">
        <h1>{page.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: page.content.childMarkdownRemark.html,
          }}
        />
      </div>
    )
  }
}

export default AboutTemplateEn

export const pageQuery = graphql`
  query AboutPagesEn($slug: String!) {
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
    allContentfulAboutPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          node_locale
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
