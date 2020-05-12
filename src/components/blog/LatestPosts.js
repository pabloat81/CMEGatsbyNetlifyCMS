import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage';


const LatestPosts = () => {
	const data = useStaticQuery(graphql`
		query LatestsPostsQuery {
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date]}
				filter: { frontmatter: { templateKey: { eq: "blog-post" }  featuredpost: {eq: true} } }
				limit: 3
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
			<div className="widget widget_lastest">
				<h2 className="widget-title">
					<span>POSTS DESTACADOS</span>
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
		</Fragment>
	);
};

export default LatestPosts;
