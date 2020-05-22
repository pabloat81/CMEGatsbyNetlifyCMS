import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import BlogSidebar from '../components/blog/BlogSidebar';

export const BlogPostTemplate = ({ content, contentComponent, description, tags, title, helmet }) => {
	const PostContent = contentComponent || Content;

	return (
		<section className="section hentry">
			{helmet || ''}
			<div className="container content">
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
						<p>{description}</p>
						<PostContent content={content} />
						{tags && tags.length ? (
							<div style={{ marginTop: `4rem` }}>
								<div className="post-tags-socials clearfix">
									<div className="post-tags ">
										<span>Tags :</span>
										{tags.map((tag) => (
											<Link key={tag + `tag`} to={`/tags/${kebabCase(tag)}/`}>
												{tag}
											</Link>
										))}
									</div>
								</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
};

BlogPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout
			sidebar="sidebar-right"
			addPaddingTop={true}
			classContentWrap="container"
			featuredTitleObj={{ title: post.frontmatter.title.toUpperCase(), section: 'Blog' }}
		>
			<div id="site-content" className="site-content clearfix">
				<div id="inner-content" className="inner-content-wrap">
					<BlogPostTemplate
						content={post.html}
						contentComponent={HTMLContent}
						description={post.frontmatter.description}
						helmet={
							<Helmet titleTemplate="%s | Blog">
								<title>{`${post.frontmatter.title}`}</title>
								<meta name="description" content={`${post.frontmatter.description}`} />
							</Helmet>
						}
						tags={post.frontmatter.tags}
						title={post.frontmatter.title}
					/>
				</div>
			</div>
			<BlogSidebar />
		</Layout>
	);
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				description
				tags
			}
		}
	}
`;
