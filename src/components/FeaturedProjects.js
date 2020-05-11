import React from 'react';
import { Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import {elipsis} from './utils/utils'

const FeaturedProjects = ({ projects }) => {
	return (
		<div className="row-project parallax parallax-1 parallax-overlay">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<div
							className="themesflat-spacer clearfix"
							data-desktop="60"
							data-mobile="60"
							data-smobile="60"
						/>
						<div className="themesflat-headings style-1 text-center clearfix">
							<h2 className="heading text-white">{projects.heading.toUpperCase()}</h2>
							<div className="sep has-icon width-125 border-color-light clearfix">
								<div className="sep-icon">
									<span className="sep-icon-before sep-center sep-solid" />
									<span className="icon-wrap">
										<i className="fa fa-wrench"></i>
									</span>
									<span className="sep-icon-after sep-center sep-solid" />
								</div>
							</div>
						</div>
						<div
							className="themesflat-spacer clearfix"
							data-desktop="30"
							data-mobile="35"
							data-smobile="35"
						/>
						<div
							className="themesflat-carousel-box clearfix"
							data-gap="30"
							data-column="4"
							data-column2="2"
							data-column3="1"
							data-auto="false"
						>
							<div className="owl-carousel owl-theme">
								{projects.blurbs.map((blurb) => (
									<div key={blurb.text} className="themesflat-project style-1 data-effect  clearfix">
										<div className="project-item">
											<div className="inner">
												<div className="thumb data-effect-item has-effect-icon w40 offset-v-43 offset-h-46">
													<PreviewCompatibleImage imageInfo={blurb} />
													<div className="text-wrap text-center">
														<h5 className="heading">
															<Link to={blurb.url}>{elipsis(blurb.text, 40)}</Link>
														</h5>
														<div className="elm-meta">
															<span>
																<Link to="/obras">Obras</Link>
															</span>
															<span>
																<Link to="/obras">Ingeniería</Link>
															</span>
														</div>
													</div>
													<div className="elm-link">
														{/*<a href="#" className="icon-1 icon-search" />*/}
														<Link to={blurb.url} className="icon-1" />
													</div>
													<div className="overlay-effect bg-color-3" />
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div
							className="themesflat-spacer clearfix"
							data-desktop="41"
							data-mobile="35"
							data-smobile="35"
						/>
						<div className="elm-button text-center">
							<Link to="/obras" className="themesflat-button bg-accent">
								VER OBRAS
							</Link>
						</div>
						<div
							className="themesflat-spacer clearfix"
							data-desktop="73"
							data-mobile="60"
							data-smobile="60"
						/>
					</div>
				</div>
			</div>
			<div className="bg-parallax-overlay overlay-black" />
		</div>
	);
};

export default FeaturedProjects;
