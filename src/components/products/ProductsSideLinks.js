import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

const ProductsSideLinks = () => {
	const data = useStaticQuery(graphql`
		query LatestsproductsQuery {
			allMarkdownRemark(
				sort: { order: ASC, fields: [frontmatter___orden] }
				filter: { frontmatter: { templateKey: { eq: "product-template" } } }
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
					<li className="list-item">
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

export default ProductsSideLinks;
