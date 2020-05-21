import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import _ from 'lodash'

const MercadosNavBarLinks = () => {
	const data = useStaticQuery(graphql`
		query MercadosNavBarLinksQuery {
			allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "mercados-page" } } }) {
				nodes {
					frontmatter {
						intro {
							blurbs {
								title
							}
						}
					}
				}
			}
		}
	`);
	
	const blurbs = data.allMarkdownRemark.nodes[0].frontmatter.intro.blurbs
	
	return (
		<ul className="sub-menu">
			{ blurbs &&
				_.orderBy(blurbs, ['title'], ['asc']).map((blurb, index) => (
					<li key={index} className="menu-item">
						<Link to={`/mercados#${blurb.title}`}>{blurb.title}</Link>
					</li>
				))}
		</ul>
	);
};

export default MercadosNavBarLinks;
