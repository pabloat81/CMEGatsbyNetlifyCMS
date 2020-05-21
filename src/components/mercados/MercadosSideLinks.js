import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

const MercadosSideLinks = ({blurbsArray}) => {
	
	return (
		<div className="widget widget_list products_links">
			<div className="inner">
				<ul className="list-wrap">
				{blurbsArray &&
					blurbsArray.map((blurb, index) => (
					<li key={index} className="list-item">
						<a href={`#${blurb.title}`}>
							<span className="text">{blurb.title}</span>
						</a>
					</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MercadosSideLinks;
