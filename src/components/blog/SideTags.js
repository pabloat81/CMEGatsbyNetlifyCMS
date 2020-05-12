import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import _ from 'lodash';

const SideTags = () => {
	const data = useStaticQuery(graphql`
		query SideTagQuery {
			allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "blog-post" } } }, limit: 7) {
				edges {
					node {
						frontmatter {
							tags
						}
					}
				}
			}
		}
	`);

	const { edges: posts } = data.allMarkdownRemark;
	// Tag pages:
	let tags = [];
	// Iterate through each post, putting all found tags into `tags`
	posts.forEach((edge) => {
		if (_.get(edge, `node.frontmatter.tags`)) {
			tags = tags.concat(edge.node.frontmatter.tags);
		}
	});
	// Eliminate duplicate tags
	tags = _.uniq(tags);

	return (
		<Fragment>
			<div className="widget widget_tags margin-top-55">
				<h2 className="widget-title">
					<span>TAGS</span>
				</h2>
				<div className="tags-list">
					{tags.map((tag) => (
						<Link key={tag} to={`/tags/${_.kebabCase(tag)}/`}>
							{tag}
						</Link>
					))}
				</div>
			</div>
		</Fragment>
	);
};

export default SideTags;
