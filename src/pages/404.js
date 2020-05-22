import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout classContentWrap="container" featuredTitleObj={{ title: 'LA PAGINA NO EXISTE', section: '404' }}>
     <div id="site-content" className="site-content clearfix">
				<div id="inner-content" className="inner-content-wrap">
					<div className="themesflat-spacer clearfix" data-desktop="61" data-mobile="60" data-smobile="60" />
					<div className="themesflat-headings style-2 clearfix">
						<h1 className="heading">404</h1>
						<div className="sep has-width w80 accent-bg clearfix" />
						<p className="sub-heading line-height-24 text-777 margin-top-28 margin-right-12">
              La ruta no existe
						</p>
					</div>
					<div className="themesflat-spacer clearfix" data-desktop="60" data-mobile="35" data-smobile="35" />
				
        </div>
			</div>
  </Layout>
)

export default NotFoundPage
