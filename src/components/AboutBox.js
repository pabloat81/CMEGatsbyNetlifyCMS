import React from 'react';
//import { Link } from 'gatsby'

const AboutBox = class extends React.Component {
	render() {
		return (
			<div className="row-about">
				<div className="container-fluid">
					<div className="row equalize sm-equalize-auto">
						<div className="col-md-6 half-background style-1" />
						<div className="col-md-6 bg-light-grey">
							<div
								className="themesflat-spacer clearfix"
								data-desktop="64"
								data-mobile="60"
								data-smobile="60"
							/>
							<div
								className="themesflat-content-box clearfix"
								data-margin="0 25% 0 4.5%"
								data-mobilemargin="0 0 0 4.5%"
							>
								<div className="themesflat-headings style-1 clearfix">
									<h2 className="heading">WELCOME TO AUTORA</h2>
									<div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
									<p className="sub-heading margin-top-30">
										We have successfully completed projects in numerous states across the
										continental United States. Autora Construction Services has a proven track
										record of:
									</p>
								</div>
								<div
									className="themesflat-spacer clearfix"
									data-desktop="26"
									data-mobile="35"
									data-smobile="35"
								/>
								<div className="content-list">
									<div className="themesflat-list has-icon style-1 icon-left clearfix">
										<div className="inner">
											<span className="item">
												<span className="icon">
													<i className="fa fa-check-square" />
												</span>
												<span className="text">
													Completing projects on time & Following budget guidelines
												</span>
											</span>
										</div>
									</div>
									<div className="themesflat-list has-icon style-1 icon-left clearfix">
										<div className="inner">
											<span className="item">
												<span className="icon">
													<i className="fa fa-check-square" />
												</span>
												<span className="text">Elevated quality of workmanship</span>
											</span>
										</div>
									</div>
									<div className="themesflat-list has-icon style-1 icon-left clearfix">
										<div className="inner">
											<span className="item">
												<span className="icon">
													<i className="fa fa-check-square" />
												</span>
												<span className="text">Meeting diverse supplier requirements</span>
											</span>
										</div>
									</div>
									<div className="themesflat-list has-icon style-1 icon-left clearfix">
										<div className="inner">
											<span className="item">
												<span className="icon">
													<i className="fa fa-check-square" />
												</span>
												<span className="text">
													Implementing appropriate safety precautions and procedures
												</span>
											</span>
										</div>
									</div>
								</div>
								<div
									className="themesflat-spacer clearfix"
									data-desktop="42"
									data-mobile="35"
									data-smobile="35"
								/>
								<div className="elm-button">
									<a href="#" className="themesflat-button bg-white">
										GET IN TOUCH
									</a>
								</div>
							</div>
							<div
								className="themesflat-spacer clearfix"
								data-desktop="75"
								data-mobile="60"
								data-smobile="60"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default AboutBox;
