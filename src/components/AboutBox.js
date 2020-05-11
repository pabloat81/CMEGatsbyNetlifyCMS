import React from 'react';
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage';

const AboutBox = ({ data }) => {
	return (
		<div className="row-about">
			<div className="container-fluid">
				<div className="row equalize sm-equalize-auto">
					<div className="col-md-6" >
						<PreviewCompatibleImage imageInfo={{
                          image: data.image,
                          alt: data.heading,
                        }} />
					</div>
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
								<h2 className="heading">{data.heading}</h2>
								<div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
								<p className="sub-heading margin-top-30">
									{data.description}
								</p>
							</div>
							<div
								className="themesflat-spacer clearfix"
								data-desktop="26"
								data-mobile="35"
								data-smobile="35"
							/>
							<div className="content-list">
								
								{data.blurbs.map((blurb) => (
								<div key={blurb.text} className="themesflat-list has-icon style-1 icon-left clearfix">
									<div className="inner">
										<span className="item">
											<span className="icon">
												<i className="fa fa-check-square" />
											</span>
											<span className="text">
												{blurb.text}
											</span>
										</span>
									</div>
								</div>
								))}
							</div>
							<div
								className="themesflat-spacer clearfix"
								data-desktop="42"
								data-mobile="35"
								data-smobile="35"
							/>
							<div className="elm-button">
								<Link to="/about" className="themesflat-button bg-white">
									MAS SOBRE NOSOTROS
								</Link>
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
};

export default AboutBox;
