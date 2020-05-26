import React from 'react'
import PropTypes from 'prop-types'
import { FAQPageTemplate } from '../../templates/faq-page'

const FAQPagePreview = ({ entry, widgetFor }) => (
  <FAQPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FAQPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FAQPagePreview
