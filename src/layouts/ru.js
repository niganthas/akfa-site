import React from 'react'
import Layout from './index'
import { addLocaleData } from 'react-intl'

import messages from '../data/messages/ru'
import ru from 'react-intl/locale-data/ru'
// import 'intl/locale-data/jsonp/ru'

addLocaleData(ru)

export default props => <Layout {...props} i18nMessages={messages} />

export const pageQuery = graphql`
  query LayoutRu {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`
