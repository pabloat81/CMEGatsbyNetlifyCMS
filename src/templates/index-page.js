import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

import Ventajas from '../components/Ventajas';
import PorQueElegirnos from '../components/PorQueElegirnos';
import AboutBox from '../components/AboutBox';
import FeaturedProducts from '../components/FeaturedProducts';
import FeaturedProjects from '../components/FeaturedProjects';

import videomp4 from '../../static/assets/video.mp4';

export const IndexPageTemplate = ({
	image,
	title,
	metaDescripcion,
	ventajas,
	porQueElegirnos,
	productosDestacados,
	obrasDestacadas,
	aboutBox
}) => (
	<Fragment>
		<Helmet titleTemplate="%s | Blog">
			<title>{title}</title>
			<meta name="description" content={metaDescripcion} data-react-helmet="true" />
			<meta property="og:image" content={image.publicURL} />
		</Helmet>
		<div id="site-content" className="site-content clearfix">
			<div id="inner-content" className="inner-content-wrap" >
				<div className="page-content">
					<video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
						<source src={videomp4} type="video/mp4" />
					</video>
					<PorQueElegirnos porQueElegirnos={porQueElegirnos} />
					<AboutBox data={aboutBox} />

					<FeaturedProducts productosDestacados={productosDestacados} />
					<Ventajas ventajas={ventajas} />

					<FeaturedProjects projects={obrasDestacadas} />
				</div>
			</div>
		</div>
	</Fragment>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
	title: PropTypes.string,
	metaDescripcion: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array
	}),
	ventajas: PropTypes.shape({
		iconosVentajas: PropTypes.array
	}),
	porQueElegirnos: PropTypes.shape({
		iconos: PropTypes.array
	}),
	productosDestacados: PropTypes.object,
	obrasDestacadas: PropTypes.shape({
		blurbs: PropTypes.array
	}),
	aboutBox: PropTypes.shape({
		blurbs: PropTypes.array
	})
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				metaDescripcion={frontmatter.metaDescripcion}
				ventajas={frontmatter.ventajas}
				porQueElegirnos={frontmatter.PorQueElegirnos}
				productosDestacados={frontmatter.productosDestacados}
				obrasDestacadas={frontmatter.obrasDestacadas}
				aboutBox={frontmatter.aboutBox}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplateCME {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					publicURL
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				metaDescripcion
				obrasDestacadas {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 240, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
						url
					}
					heading
					description
				}
				productosDestacados {
					heading
					description
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 350, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
						url
					}
				}
				ventajas {
					iconosVentajas {
						Icono
						tituloVentaja
						subTituloVentaja
					}
					titulo
					subtitulo
				}
				PorQueElegirnos {
					iconos {
						icono
						titulo
						subTitulo
					}
					titulo
					subtitulo
				}
				aboutBox {
					heading
					description
					url
					image {
						childImageSharp {
							fluid(maxWidth: 600, quality: 90) {
								...GatsbyImageSharpFluid
							}
						}
					}
					blurbs {
						text
					}
				}
			}
		}
	}
`;
