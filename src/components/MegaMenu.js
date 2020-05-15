import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import _ from 'lodash';

const MegaMenu = class extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: productos } = data.allMarkdownRemark;
		const chunks = _.chunk(productos, 4);

		return (
			<ul className="sub-menu mega">
				<li>
					<div className="dropdown-menu border-0 p-0 m-0 mega">
						<div className="container">
							<div className="row bg-megamenu rounded-0 m-0 shadow-sm">
								<div className="col-lg-12 col-xl-12">
									<div className="p-4">
										<div className="row">
											{chunks.map(filaProductos => (
												
												filaProductos.map(({ node: producto }) => (
													<div key={producto.id} className="col-lg-3 mb-3">
														<Link to={producto.fields.slug} className="card">
															{producto.frontmatter.imagenPrincipal ? (
																<div className="featured-thumbnail">
																	<PreviewCompatibleImage
																		className="card-img-top"
																		imageInfo={{
																			image: producto.frontmatter.imagenPrincipal,
																			alt: `Imagen producto ${producto.frontmatter
																				.title}`
																		}}
																	/>
																</div>
															) : null}
														</Link>
														<div className="card-body">
															<p className="card-text">
																{producto.frontmatter.title.toUpperCase()}
															</p>
														</div>
													</div>
												))
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		);
	}
};

export default () => (
	<StaticQuery
		query={graphql`
			query ProductosMegaMenuTemplate {
				allMarkdownRemark(
					sort: { order: ASC, fields: [frontmatter___orden] }
					filter: { frontmatter: { templateKey: { eq: "product-template" } } }
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
		render={(data) => <MegaMenu data={data} />}
	/>
);
