import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Link } from 'gatsby';
import {elipsis} from './utils/utils'

const FeaturedProducts = ({ productosDestacados }) => {

	return (
		<div className="row-services">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div
							className="themesflat-spacer clearfix"
							data-desktop="60"
							data-mobile="60"
							data-smobile="60"
						/>
						<div className="themesflat-headings style-1 text-center clearfix">
							<h2 className="heading">{productosDestacados.heading.toUpperCase()}</h2>
							<div className="sep has-icon width-125 clearfix">
								<div className="sep-icon">
									<span className="sep-icon-before sep-center sep-solid" />
									<span className="icon-wrap">
										<i className="fa fa-wrench"></i>
									</span>
									<span className="sep-icon-after sep-center sep-solid" />
								</div>
							</div>
							<p className="sub-heading">{productosDestacados.description}</p>
						</div>
						<div
							className="themesflat-spacer clearfix"
							data-desktop="39"
							data-mobile="35"
							data-smobile="35"
						/>
						<div
							className="themesflat-carousel-box data-effect clearfix"
							data-gap="30"
							data-column="3"
							data-column2="2"
							data-column3="1"
							data-auto="false"
						>
							<div className="owl-carousel owl-theme">
								{productosDestacados.blurbs.map((blurb) => (
									<div key={blurb.text} className="themesflat-image-box style-1 has-icon icon-right w65 clearfix">
										<div className="image-box-item">
											<div className="inner">
												<div className="thumb data-effect-item">
													<PreviewCompatibleImage imageInfo={blurb} />
													<div className="overlay-effect bg-color-accent" />
												</div>
												<div className="text-wrap">
													<h5 className="heading">
														<Link to={blurb.url}>{elipsis(blurb.text)}</Link>
													</h5>
													<span className="icon-wrap">
														<i className="fa fa-angle-right" />
													</span>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div
							className="themesflat-spacer clearfix"
							data-desktop="50"
							data-mobile="35"
							data-smobile="35"
						/>
						<div className="elm-button text-center">
							<Link to="/productos" className="themesflat-button bg-accent">
								TODOS LOS PRODUCTOS
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
		</div>
	);
};

export default FeaturedProducts;
