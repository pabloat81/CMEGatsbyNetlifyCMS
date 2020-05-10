import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        metaDescripcion={data.heading}
        ventajas={data.ventajas || { iconosVentajas: [] }}
        porQueElegirnos={data.PorQueElegirnos || { iconos: [] }}
        productosDestacados={data.productosDestacados}
        obrasDestacadas={data.obrasDestacadas}
        aboutBox={data.aboutBox}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
