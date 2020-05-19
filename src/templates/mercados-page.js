import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Features from '../components/Features';

export const MercadosPageTemplate = ({ image, title, metaDescription, intro }) => (
	<Fragment>
		<div id="site-content" class="site-content clearfix">
			<div id="inner-content" class="inner-content-wrap">
				<div class="themesflat-spacer clearfix" data-desktop="80" data-mobile="60" data-smobile="60" />
				<div
					class="themesflat-carousel-box data-effect clearfix"
					data-gap="0"
					data-column="1"
					data-column2="1"
					data-column3="1"
					data-auto="true"
				>
					<div class="owl-carousel2 owl-theme">
						<div class="themesflat-gallery style-1 clearfix">
							<div class="gallery-item">
								<div class="inner">
									<div class="thumb">
										<img src="assets/img/gallery/gallery-1-840x357.jpg" alt="Image" />
										<div class="text-wrap">
											<span>We need you </span>
											<h5 class="heading">to join our team !</h5>
											<span>Apply now!</span>
											<a href="#" class="themesflat-button bg-accent">
												APPLY NOW
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div class="themesflat-spacer clearfix" data-desktop="29" data-mobile="35" data-smobile="35" />
				<div class="themesflat-headings style-2 clearfix">
					<h2 class="heading">WE ARE HIRING</h2>
					<div class="sep has-width w80 accent-bg clearfix" />
					<p class="sub-heading font-size-16 line-height-28 text-666 margin-top-27 letter-spacing-01">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					</p>
				</div>
				
				<div class="themesflat-spacer clearfix" data-desktop="78" data-mobile="60" data-smobile="60" />
			</div>
		</div>
		<div id="sidebar">
			<div class="themesflat-spacer clearfix" data-desktop="80" data-mobile="0" data-smobile="0" />
			<div id="inner-sidebar" class="inner-content-wrap">
				<div class="widget widget_list">
					<div class="inner">
						<ul class="list-wrap">
							<li class="list-item">
								<a href="#">
									<span class="text">Who we are?</span>
								</a>
							</li>
							<li class="list-item">
								<a href="#">
									<span class="text">Leadership Team</span>
								</a>
							</li>
							<li class="list-item">
								<a href="#">
									<span class="text">Careers</span>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="widget widget_instagram margin-top-51">
					<h2 class="widget-title margin-bottom-30">
						<span>OUR GALLERY</span>
					</h2>
					<div class="instagram-wrap data-effect clearfix col3 g10">
						<div class="instagram_badge_image has-effect-icon">
							<a href="#" target="_blank" class="data-effect-item">
								<span class="item">
									<img src="assets/img/instagram/instagram-1-83x83.jpg" alt="Image" />
								</span>
								<div class="overlay-effect bg-color-2" />
								<div class="elm-link">
									<span class="icon-3" />
								</div>
							</a>
						</div>

						<div class="instagram_badge_image has-effect-icon">
							<a href="#" target="_blank" class="data-effect-item">
								<span class="item">
									<img src="assets/img/instagram/instagram-2-83x83.jpg" alt="Image" />
								</span>
								<div class="overlay-effect bg-color-2" />
								<div class="elm-link">
									<span class="icon-3" />
								</div>
							</a>
						</div>

						<div class="instagram_badge_image has-effect-icon">
							<a href="#" target="_blank" class="data-effect-item">
								<span class="item">
									<img src="assets/img/instagram/instagram-3-83x83.jpg" alt="Image" />
								</span>
								<div class="overlay-effect bg-color-2" />
								<div class="elm-link">
									<span class="icon-3" />
								</div>
							</a>
						</div>

						<div class="instagram_badge_image has-effect-icon">
							<a href="#" target="_blank" class="data-effect-item">
								<span class="item">
									<img src="assets/img/instagram/instagram-4-83x83.jpg" alt="Image" />
								</span>
								<div class="overlay-effect bg-color-2" />
								<div class="elm-link">
									<span class="icon-3" />
								</div>
							</a>
						</div>

						<div class="instagram_badge_image has-effect-icon">
							<a href="#" target="_blank" class="data-effect-item">
								<span class="item">
									<img src="assets/img/instagram/instagram-5-83x83.jpg" alt="Image" />
								</span>
								<div class="overlay-effect bg-color-2" />
								<div class="elm-link">
									<span class="icon-3" />
								</div>
							</a>
						</div>

						<div class="instagram_badge_image has-effect-icon">
							<a href="#" target="_blank" class="data-effect-item">
								<span class="item">
									<img src="assets/img/instagram/instagram-6-83x83.jpg" alt="Image" />
								</span>
								<div class="overlay-effect bg-color-2" />
								<div class="elm-link">
									<span class="icon-3" />
								</div>
							</a>
						</div>
					</div>
				</div>

				<div class="widget widget_lastest_twitter margin-top-40">
					<h2 class="widget-title">
						<span>LATEST TWITTER</span>
					</h2>
					<ul class="lastest-posts clearfix">
						<li class="clearfix">
							<div class="icon-wrap has-width w30">
								<i class="ion-social-twitter" />
							</div>
							<div class="text">
								<p>
									<a href="#">@Niche_Theme</a> Lorem Ipsum has been the industry's standard dummy text
									ever since.
								</p>
							</div>
						</li>
						<li class="clearfix">
							<div class="icon-wrap has-width w30">
								<i class="ion-social-twitter" />
							</div>
							<div class="text">
								<p>
									<a href="#">@Niche_Theme</a> Lorem Ipsum has been the industry's standard dummy text
									ever since.
								</p>
							</div>
						</li>
						<li class="clearfix">
							<div class="icon-wrap has-width w30">
								<i class="ion-social-twitter" />
							</div>
							<div class="text">
								<p>
									<a href="#">@Niche_Theme</a> Lorem Ipsum has been the industry's standard dummy text
									ever since.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="themesflat-spacer clearfix" data-desktop="0" data-mobile="60" data-smobile="60" />
		</div>
	</Fragment>
);

MercadosPageTemplate.propTypes = {
	image: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
	title: PropTypes.string,
	metaDescription: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array
	})
};

const MercadosPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout
      sidebar="sidebar-right"
			classContentWrap="container"
			featuredTitleObj={{ title: 'MERCADOS', section: 'Mercados' }}
    >
			<MercadosPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				metaDescription={frontmatter.metaDescription}
				intro={frontmatter.intro}
			/>
		</Layout>
	);
};

MercadosPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default MercadosPage;

export const productPageQuery = graphql`
	query MercadosPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				metaDescription
				intro {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 240, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
						Link
						title
					}
					description
				}
			}
		}
	}
`;
