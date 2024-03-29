import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import ProductsSideLinks from '../components/products/ProductsSideLinks';
import DownloadsSideLinks from '../components/products/DownloadsSideLinks';
import PhotoSlider from '../components/PhotoSlider';
import ProsAndCons from '../components/products/ProsAndCons';

export const ProductTemplate = ({ content, contentComponent, frontmatter, helmet }) => {
	const DescripcionContent = contentComponent || Content;

	return (
		<Fragment>
			{helmet || ''}

			<div id="site-content" className="site-content clearfix">
				<div id="inner-content" className="inner-content-wrap">
					<div className="page-content">
						<div className="row-project-detail">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div
											className="themesflat-spacer clearfix products_links"
											data-desktop="60"
											data-mobile="60"
											data-smobile="60"
										/>
										<div className="detail-inner-wrap">
											<div className="detail-info">
												<div
													className="themesflat-spacer clearfix products_links"
													data-desktop="20"
													data-mobile="20"
													data-smobile="20"
												/>

												<ProductsSideLinks />

												<div
													className="themesflat-spacer clearfix"
													data-desktop="46"
													data-mobile="35"
													data-smobile="35"
												/>

												<DownloadsSideLinks descargasArrayObj={frontmatter.descargas} />
											</div>
											<div className="detail-gallery">
												<div
													className="themesflat-spacer clearfix"
													data-desktop="21"
													data-mobile="21"
													data-smobile="21"
												/>
												<div
													className="themesflat-gallery style-2 has-arrows arrow-center arrow-circle offset-v-82 has-thumb w185 clearfix"
													data-gap="0"
													data-column="1"
													data-column2="1"
													data-column3="1"
													data-auto="false"
												>
													<PhotoSlider imagesArrayObj={frontmatter.imagenes} />
												</div>
												<div
													className="themesflat-spacer clearfix"
													data-desktop="40"
													data-mobile="40"
													data-smobile="40"
												/>
												<div className="flat-content-wrap style-3 clearfix">
													{/*<h1 className="title">{frontmatter.title}</h1>
												<div className="sep has-width w60 accent-bg margin-top-18 clearfix" />*/}
													<DescripcionContent content={content} />
												</div>

												<ProsAndCons ventajasObj={frontmatter.ventajas} />
											</div>
										</div>
										<div
											className="themesflat-spacer clearfix"
											data-desktop="58"
											data-mobile="60"
											data-smobile="60"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

ProductTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	frontmatter: PropTypes.object,
	helmet: PropTypes.object
};

const Product = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout featuredTitleObj={{ title: post.frontmatter.title.toUpperCase(), section: 'Productos' }}>
			<ProductTemplate
				content={post.html}
				contentComponent={HTMLContent}
				frontmatter={post.frontmatter}
				helmet={
					<Helmet titleTemplate="%s | Productos">
						<title>{`${post.frontmatter.title}`}</title>
						<meta name="description" content={`${post.frontmatter.metaDescription}`} />
					</Helmet>
				}
			/>
		</Layout>
	);
};

Product.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default Product;

export const pageQuery = graphql`
	query ProductosByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				title
				metaDescription
				imagenes {
					alt
					imagen {
						childImageSharp {
							fluid(maxWidth: 800, quality: 90) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				descargas {
					nombreArchivo
					archivo {
						publicURL
					}
				}
				ventajas {
					titulo
					listaVentajas {
						titulo
						descripcion
					}
				}
			}
		}
	}
`;
