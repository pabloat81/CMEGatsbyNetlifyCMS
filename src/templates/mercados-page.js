import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import MercadosSideLinks from '../components/mercados/MercadosSideLinks';
import _ from 'lodash';
import {Helmet} from 'react-helmet';

export const MercadosPageTemplate = ({ image, title, metaDescription, intro }) => (
	<Fragment>
		 <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

		<div id="site-content" className="site-content clearfix">
			<div id="inner-content" className="inner-content-wrap">
				<div className="themesflat-spacer clearfix" data-desktop="80" data-mobile="60" data-smobile="60" />

				{intro.blurbs &&
					_.orderBy(intro.blurbs, [ 'title' ], [ 'asc' ]).map((blurb, index) => (
						<Fragment key={index}>
							<a id={blurb.title} />
							<div
								className="themesflat-carousel-box data-effect clearfix"
								data-gap="0"
								data-column="1"
								data-column2="1"
								data-column3="1"
								data-auto="true"
							>
								<div className="owl-carousel2 owl-theme">
									<div className="themesflat-gallery style-1 clearfix">
										<div className="gallery-item">
											<div className="inner">
												<div className="thumb">
													<PreviewCompatibleImage
														imageInfo={{
															image: blurb.image,
															alt: `Mercado: ${blurb.title}`
														}}
													/>
													<div className="text-wrap">
														<span>Mercado:</span>
														<h1 className="heading">{blurb.title}</h1>
														{/*<span>Apply now!</span>*/}
														<a
															href={blurb.link}
															style={
																blurb.link ? { display: 'block' } : { display: 'none' }
															}
															className="themesflat-button bg-accent"
														>
															VER MAS
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="themesflat-spacer clearfix"
								data-desktop="29"
								data-mobile="35"
								data-smobile="35"
							/>
							<div className="themesflat-headings style-2 clearfix">
								<h2 className="heading">{blurb.title.toUpperCase()}</h2>
								<div className="sep has-width w80 accent-bg clearfix" />
								<p className="sub-heading font-size-16 line-height-28 text-666 margin-top-27 letter-spacing-01">
									{blurb.text}
								</p>
							</div>

							<div
								className="themesflat-spacer clearfix"
								data-desktop="78"
								data-mobile="60"
								data-smobile="60"
							/>
						</Fragment>
					))}
			</div>
		</div>
		<div id="sidebar">
			<div className="themesflat-spacer clearfix" data-desktop="80" data-mobile="0" data-smobile="0" />
			<div id="inner-sidebar" className="inner-content-wrap">
				<MercadosSideLinks blurbsArray={_.orderBy(intro.blurbs, [ 'title' ], [ 'asc' ])} />
			</div>
			<div className="themesflat-spacer clearfix" data-desktop="0" data-mobile="60" data-smobile="60" />
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
								fluid(maxWidth: 800, quality: 90) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
						link
						title
					}
					description
				}
			}
		}
	}
`;
