import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { addLocaleData, IntlProvider } from 'react-intl'

import messagesEn from '../../data/messages/en'
import messagesRu from '../../data/messages/ru'
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'

class Locale extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    this.props.langKey == 'en' ? addLocaleData(en) : addLocaleData(ru)
    const messages = this.props.langKey == 'en' ? messagesEn : messagesRu

    return (
      <div>
        <IntlProvider locale={this.props.langKey} messages={messages}>
          {this.props.children}
        </IntlProvider>
      </div>
    )
  }
}

Locale.propTypes = {}

export default Locale
