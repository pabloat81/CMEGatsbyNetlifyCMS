import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

const EstructurasSideLinks = () => {
	const data = useStaticQuery(graphql`
		query LinksEstructurasQuery {
			allMarkdownRemark(
				sort: { order: ASC, fields: [frontmatter___orden] }
				filter: { frontmatter: { templateKey: { eq: "estructura-template" } } }
			) {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							orden
							title
						}
					}
				}
			}
		}
	`);

	const { edges: products } = data.allMarkdownRemark;

	return (
		<div className="widget widget_list products_links">
			<div className="inner">
				<ul className="list-wrap">
				{products &&
					products.map(({ node: producto }) => (
					<li key={producto.id} className="list-item">
						<Link to={producto.fields.slug}>
							<span className="text">{producto.frontmatter.title}</span>
						</Link>
					</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default EstructurasSideLinks;
