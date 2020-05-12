import React, { Fragment } from 'react';

import _ from 'lodash';
import SideTags from '../../components/blog/SideTags';
import LatestPosts from '../../components/blog/LatestPosts';

const BlogSidebar = () => {

	return (
		<Fragment>
			<div id="sidebar">
					<div className="themesflat-spacer clearfix" data-desktop="0" data-mobile="60" data-smobile="60" />
					<div id="inner-sidebar" className="inner-content-wrap">
						<div className="widget widget_follow">
							<h2 className="widget-title">
								<span>SEGUINOS</span>
							</h2>
							<div className="follow-wrap clearfix col3 g8">
								<div className="follow-item facebook">
									<div className="inner">
										<span className="socials">
											<a href="https://www.facebook.com/CMEArgentina" target="_blank">
												<i className="fa fa-facebook" />
											</a>
										</span>
									</div>
								</div>
								<div className="follow-item twitter">
									<div className="inner">
										<span className="socials">
											<a href="https://www.instagram.com/cmeargentina/?hl=es-la" target="_blank">
												<i className="fa fa-instagram" />
											</a>
										</span>
									</div>
								</div>
								<div className="follow-item google">
									<div className="inner">
										<span className="socials">
											<a href="https://www.linkedin.com/company/cmeargentinasa/" target="_blank">
												<i className="fa fa-linkedin" />
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>

						<LatestPosts />

						<SideTags />
					</div>
				</div>
		</Fragment>
	);
};

export default BlogSidebar;
