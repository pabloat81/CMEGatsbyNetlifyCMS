import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';

class EstructurasIndexPage extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: productos } = data.allMarkdownRemark;

		return (
			<Layout featuredTitleObj={{ title: 'ESTRUCTURAS EN MATERIAL COMPUESTO DE FIBRA DE VIDRIO', section: 'Estructuras' }}>
				<div id="site-content" className="site-content clearfix">
					<div id="inner-content" className="inner-content-wrap">
						<div className="page-content">
							<div className="row-services">
								<div className="container">
									<div className="row">
										<div className="col-md-12">
											<div
												className="themesflat-spacer clearfix"
												data-desktop="40"
												data-mobile="35"
												data-smobile="35"
											/>
											<div className="themesflat-project style-2 isotope-project has-margin mg15 data-effect clearfix">
												{productos &&
													productos.map(({ node: producto }) => (
														<div key={producto.id} className="project-item">
															<div className="inner">
																<div className="thumb data-effect-item has-effect-icon w40 offset-v-19 offset-h-49">
																	{producto.frontmatter.imagenPrincipal ? (
																		<div className="featured-thumbnail">
																			<PreviewCompatibleImage
																				imageInfo={{
																					image:
																						producto.frontmatter.imagenPrincipal,
																					alt: `Imagen producto: ${producto.frontmatter.title}`
																				}}
																			/>
																		</div>
																	) : null}

																	<div className="elm-link">
																		<Link
																			to={producto.fields.slug}
																			className="icon-1"
																		/>
																	</div>
																	<div className="overlay-effect bg-color-3" />
																</div>
																<div className="text-wrap">
																	<h5 className="heading">
																		<Link to={producto.fields.slug}>
																			{producto.frontmatter.title.toUpperCase()}
																		</Link>
																	</h5>
																</div>
															</div>
														</div>
													))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

EstructurasIndexPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query EstructurasPageTemplate {
				allMarkdownRemark(
					sort: { order: ASC, fields: [frontmatter___orden] }
					filter: { frontmatter: { templateKey: { eq: "estructura-template" } } }
				) {
					edges {
						node {
							id
							fields {
								slug
							}
							frontmatter {
								imagenPrincipal {
									childImageSharp {
										fluid(maxWidth: 120, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
								orden
								title
							}
						}
					}
				}
			}
		`}
		render={(data) => <EstructurasIndexPage data={data} />}
	/>
);
