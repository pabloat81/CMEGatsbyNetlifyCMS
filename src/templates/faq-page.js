import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

export const FAQPageTemplate = ({ title, metaDescription, frontmatter }) => {
	return (
		<Fragment>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={metaDescription} />
			</Helmet>
			<div id="site-content" className="site-content clearfix">
				<div id="inner-content" className="inner-content-wrap">
					<div className="themesflat-spacer clearfix" data-desktop="61" data-mobile="60" data-smobile="60" />
					<div class="row">
						<div class="col-md-12">
							<div
								class="themesflat-spacer clearfix"
								data-desktop="0"
								data-mobile="0"
								data-smobile="35"
							/>
							<div class="themesflat-content-box" data-margin="0 0 0 18px" data-mobilemargin="0 0 0 0">
								<div class="themesflat-headings style-1 clearfix">
									<h2 class="heading">{title.toUpperCase()}</h2>
									<div class="sep has-width w80 accent-bg margin-top-11 clearfix" />
								</div>
								<div
									class="themesflat-spacer clearfix"
									data-desktop="38"
									data-mobile="35"
									data-smobile="35"
								/>
								<div class="themesflat-accordions style-1 has-icon icon-left iconstyle-1 clearfix">
									{frontmatter.faq &&
										frontmatter.faq.listaFaqs.map((faq, index) => (
											<div key={index} class={`accordion-item ${index === 0 ? 'active' : ''}`}>
												<h3 class="accordion-heading">
													<span class="inner">{faq.titulo}</span>
												</h3>
												<div class="accordion-content">
													<div>{faq.descripcion}</div>
												</div>
											</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="themesflat-spacer clearfix" data-desktop="28" data-mobile="35" data-smobile="35" />
				</div>
			</div>
		</Fragment>
	);
};

FAQPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const FAQPage = ({ data }) => {
	const { markdownRemark: post } = data;
	return (
		<Layout classContentWrap="container" featuredTitleObj={{ title: 'QUIENES SOMOS', section: 'Quienes somos' }}>
			<FAQPageTemplate title={post.frontmatter.title} frontmatter={post.frontmatter} />
		</Layout>
	);
};

FAQPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default FAQPage;

export const FAQPageQuery = graphql`
	query FAQPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				metaDescription
				faq {
					titulo
					listaFaqs {
						titulo
						descripcion
					}
				}
			}
		}
	}
`;
