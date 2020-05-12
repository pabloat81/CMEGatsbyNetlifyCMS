import React, { Fragment } from 'react';
import { Link } from 'gatsby';

const FeaturedTitle = ({ featuredTitleObj }) => {
	if (featuredTitleObj) {
		return (
			<div id="featured-title" className="featured-title clearfix">
				<div id="featured-title-inner" className="container clearfix">
					<div className="featured-title-inner-wrap">
						<div id="breadcrumbs">
							<div className="breadcrumbs-inner">
								<div className="breadcrumb-trail">
									<Link to="/" className="trail-begin">
										Home
									</Link>
									<span className="sep">|</span>
									<span className="trail-end">{featuredTitleObj.section}</span>
								</div>
							</div>
						</div>
						<div className="featured-title-heading-wrap">
							<h1 className="feautured-title-heading">{featuredTitleObj.title}</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
	else
		return <Fragment/>
};

export default FeaturedTitle;
