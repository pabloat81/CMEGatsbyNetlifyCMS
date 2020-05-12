import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;

		return (
			<Fragment>
				{posts &&
					posts.map(({ node: post }) => (
						<article key={post.id} className="hentry data-effect">
							<div className="post-media has-effect-icon offset-v-25 offset-h-24 data-effect-item clerafix">
								<Link to={post.fields.slug}>
									{post.frontmatter.featuredimage ? (
										<div className="featured-thumbnail">
											<PreviewCompatibleImage
												imageInfo={{
													image: post.frontmatter.featuredimage,
													alt: `Imagen post ${post.frontmatter.title}`
												}}
											/>
										</div>
									) : null}
								</Link>
								<div className="post-calendar">
									<span className="inner">
										<span className="entry-calendar">
											<span className="day">{post.frontmatter.date}</span>
										</span>
									</span>
								</div>
								<div className="overlay-effect bg-color-1" />
								<div className="elm-link">
									<Link className="icon-1" to={post.fields.slug} />
								</div>
							</div>

							<div className="post-content-wrap clearfix">
								<h2 className="post-title">
									<span className="post-title-inner">
										<Link to={post.fields.slug}>{post.frontmatter.title}</Link>
									</span>
								</h2>
								<div className="post-meta">
									<div className="post-meta-content">
										<div className="post-meta-content-inner">
											<span className="post-date item">
												<span className="inner">
													<span className="entry-date">{post.frontmatter.date}</span>
												</span>
											</span>
										</div>
									</div>
								</div>
								<div className="post-content post-excerpt">
									<p>{post.excerpt}</p>
								</div>
								<div className="post-read-more">
									<div className="post-link">
										<Link to={post.fields.slug}>LEER MAS</Link>
									</div>
								</div>
							</div>
						</article>
					))}
			</Fragment>
		);
	}
}

BlogRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query BlogRollQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
					limit: 20
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
								templateKey
								date(formatString: "DD/MM/YYYY")
								featuredpost
								featuredimage {
									childImageSharp {
										fluid(maxWidth: 120, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <BlogRoll data={data} count={count} />}
	/>
);
