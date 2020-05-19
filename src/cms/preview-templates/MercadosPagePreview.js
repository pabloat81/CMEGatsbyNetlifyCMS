import React from 'react'
import PropTypes from 'prop-types'
import { MercadosPageTemplate } from '../../templates/mercados-page'


const MercadosPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <MercadosPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      metaDescription={entry.getIn(['data', 'metaDescription'])}
      intro={{ blurbs }}
      fullImage={entry.getIn(['data', 'full_image'])}
    />
  )
}

MercadosPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MercadosPagePreview
