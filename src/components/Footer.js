import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Link } from 'gatsby';

import logo from '../../static/assets/img/logo.png';
/*import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';
*/

const Footer = () => {
	const data = useStaticQuery(graphql`
		query HeaderQuery {
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
			) {
				edges {
					node {
						excerpt(pruneLength: 400)
						id
						fields {
							slug
						}
						frontmatter {
							title
							date(formatString: "DD/MM/YYYY")
							featuredimage {
								childImageSharp {
									fluid(maxWidth: 65, quality: 100) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			}
		}
	`);

	const { edges: posts } = data.allMarkdownRemark;

	return (
		<Fragment>
			<footer id="footer" className="clearfix">
				<div id="footer-widgets" className="container">
					<div className="themesflat-row gutter-30">
						<div className="col span_1_of_3">
							<div className="widget widget_text">
								<div className="textwidget">
									<p>
										<img src={logo} alt="Image" width="170" height="34" />
									</p>

									<p className="margin-bottom-15">
										Fabricando estructuras de material compuesto desde hace 24 años
									</p>

									<ul>
										<li>
											<div className="inner">
												<span className="fa fa-map-marker" />
												<span className="text">
													JOSÉ HERNANDEZ 370 <span className="sl">GARÍN, BUENOS AIRES</span>
												</span>
											</div>
										</li>

										<li>
											<div className="inner">
												<span className="fa fa-phone" />
												<span className="text">TELÉFONOS : (011) 1559587595 / 1558109488</span>
											</div>
										</li>

										<li className="margin-top-7">
											<div className="inner">
												<span className=" font-size-14 fa fa-envelope" />
												<span className="text">VENTAS@CMEARGENTINA.COM</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="themesflat-spacer clearfix"
								data-desktop="0"
								data-mobile="0"
								data-smobile="35"
							/>
						</div>

						<div className="col span_1_of_3">
							<div
								className="themesflat-spacer clearfix"
								data-desktop="0"
								data-mobile="0"
								data-smobile="0"
							/>

							<div className="widget widget_lastest">
								<h2 className="widget-title">
									<span>ULTIMOS POSTS</span>
								</h2>
								<ul className="lastest-posts data-effect clearfix">
									{posts &&
										posts.map(({ node: post }) => (
											<li key={post.id} className="clearfix">
												<div className="thumb data-effect-item has-effect-icon">
													<PreviewCompatibleImage
														imageInfo={{
															image: post.frontmatter.featuredimage,
															alt: `post ${post.frontmatter.title}`
														}}
													/>
													<div className="overlay-effect bg-color-2" />
													<div className="elm-link">
														<Link className="icon-2" to={post.fields.slug} />
													</div>
												</div>
												<div className="text">
													<h3>
														<Link to={post.fields.slug}>{post.frontmatter.title}</Link>
													</h3>
													<span className="post-date">
													<span className="entry-date">{post.frontmatter.date}</span>
													</span>
												</div>
											</li>
										))}
								</ul>
							</div>
						</div>

						<div className="col span_1_of_3">
							<div
								className="themesflat-spacer clearfix"
								data-desktop="0"
								data-mobile="35"
								data-smobile="35"
							/>

							<div className="widget widget_tags">
								<h2 className="widget-title margin-bottom-30">
									<span>TAGS</span>
								</h2>
								<div className="tags-list">
									<a href="#">Building</a>
									<a href="#">Smart House</a>
									<a href="#">Costruction</a>
									<a href="#">Villa</a>
									<a href="#">Residential</a>
									<a href="#">Interior</a>
									<a href="#">Resort</a>
									<a href="#">Commercial</a>
								</div>
							</div>
						</div>

						<div className="col span_1_of_3">
							<div
								className="themesflat-spacer clearfix"
								data-desktop="0"
								data-mobile="35"
								data-smobile="35"
							/>

							<div className="widget widget_instagram">
								<h2 className="widget-title margin-bottom-30">
									<span>INSTAGRAM</span>
								</h2>
								<div className="instagram-wrap data-effect clearfix col3 g10">
									<div className="instagram_badge_image has-effect-icon">
										<a href="#" target="_blank" className="data-effect-item">
											<span className="item">
												<img src="assets/img/instagram/instagram-1-83x83.jpg" alt="Image" />
											</span>
											<div className="overlay-effect bg-color-2" />
											<div className="elm-link">
												<span className="icon-3" />
											</div>
										</a>
									</div>

									<div className="instagram_badge_image has-effect-icon">
										<a href="#" target="_blank" className="data-effect-item">
											<span className="item">
												<img src="assets/img/instagram/instagram-2-83x83.jpg" alt="Image" />
											</span>
											<div className="overlay-effect bg-color-2" />
											<div className="elm-link">
												<span className="icon-3" />
											</div>
										</a>
									</div>

									<div className="instagram_badge_image has-effect-icon">
										<a href="#" target="_blank" className="data-effect-item">
											<span className="item">
												<img src="assets/img/instagram/instagram-3-83x83.jpg" alt="Image" />
											</span>
											<div className="overlay-effect bg-color-2" />
											<div className="elm-link">
												<span className="icon-3" />
											</div>
										</a>
									</div>

									<div className="instagram_badge_image has-effect-icon">
										<a href="#" target="_blank" className="data-effect-item">
											<span className="item">
												<img src="assets/img/instagram/instagram-4-83x83.jpg" alt="Image" />
											</span>
											<div className="overlay-effect bg-color-2" />
											<div className="elm-link">
												<span className="icon-3" />
											</div>
										</a>
									</div>

									<div className="instagram_badge_image has-effect-icon">
										<a href="#" target="_blank" className="data-effect-item">
											<span className="item">
												<img src="assets/img/instagram/instagram-5-83x83.jpg" alt="Image" />
											</span>
											<div className="overlay-effect bg-color-2" />
											<div className="elm-link">
												<span className="icon-3" />
											</div>
										</a>
									</div>

									<div className="instagram_badge_image has-effect-icon">
										<a href="#" target="_blank" className="data-effect-item">
											<span className="item">
												<img src="assets/img/instagram/instagram-6-83x83.jpg" alt="Image" />
											</span>
											<div className="overlay-effect bg-color-2" />
											<div className="elm-link">
												<span className="icon-3" />
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div id="bottom" className="clearfix has-spacer">
				<div id="bottom-bar-inner" className="container">
					<div className="bottom-bar-inner-wrap">
						<div className="bottom-bar-content">
							<div id="copyright">
								©{' '}
								<span className="text">
									<a href="http://www.ignosoftware.com" target="_blank" className="text-accent">
										IGNO Software
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Footer;
