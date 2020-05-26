import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

export const FAQPageTemplate = ({ title, metaDescription }) => {
	return (
		<Fragment>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={metaDescription} />
			</Helmet>
			<div id="site-content" className="site-content clearfix">
				<div id="inner-content" className="inner-content-wrap">
					<div className="themesflat-spacer clearfix" data-desktop="61" data-mobile="60" data-smobile="60" />
					<div className="themesflat-headings style-2 clearfix">
						<h1 className="heading">{title.toUpperCase()}</h1>
						<div className="sep has-width w80 accent-bg clearfix" />
						<div className="sub-heading line-height-24 text-777 margin-top-28 margin-right-12">ssss</div>
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
	const { about: post } = data;
	return (
		<Layout classContentWrap="container" featuredTitleObj={{ title: 'QUIENES SOMOS', section: 'Quienes somos' }}>
			<FAQPageTemplate title={post.frontmatter.title} />
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
			}
		}
	}
`;
