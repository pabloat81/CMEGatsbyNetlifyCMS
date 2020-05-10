import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Link } from 'gatsby';

const FeaturedProducts = ({ productosDestacados }) => {
	const elipsis = (str) => {
		let cantCaracteres = 22
		if (str && str.length > 0) {
			str = str.toUpperCase();
			if (str.length > cantCaracteres) 
				return str.substring(0, cantCaracteres) + '...';
			return str;
		}
		return 'PRODUCTO';
	};

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
							<h2 className="heading">{productosDestacados.heading}}</h2>
							<div className="sep has-icon width-125 clearfix">
								<div className="sep-icon">
									<span className="sep-icon-before sep-center sep-solid" />
									<span className="icon-wrap">
										<i className="autora-icon-build" />
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
							{productosDestacados.blurbs.map(({blurb})=> (
								<div className="themesflat-image-box style-1 has-icon icon-right w65 clearfix">
									<div className="image-box-item">
										<div className="inner">
											<div className="thumb data-effect-item">
												<PreviewCompatibleImage
													imageInfo={{
														image: blurb.image,
														alt: `Imagen del producto ${blurb.alt}`
													}}
												/>
												<div className="overlay-effect bg-color-accent" />
											</div>
											<div className="text-wrap">
												<h5 className="heading">
													<Link to={blurb.url}>
														{elipsis( blurb.alt)}
													</Link>
												</h5>
												<span className="icon-wrap">
													<i className="fa fa-angle-right" />
												</span>
											</div>
										</div>
									</div>
								</div>
							))}
								<div className="themesflat-image-box style-1 has-icon icon-right w65 clearfix">
									<div className="image-box-item">
										<div className="inner">
											<div className="thumb data-effect-item">
												<img src="assets/img/imagebox/image-box-2-370x250.jpg" alt="Image" />
												<div className="overlay-effect bg-color-accent" />
											</div>
											<div className="text-wrap">
												<h5 className="heading">
													<a href="#">BUILDING ENVELOPES</a>
												</h5>
												<span className="icon-wrap">
													<i className="fa fa-angle-right" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="themesflat-image-box style-1 has-icon icon-right w65 clearfix">
									<div className="image-box-item">
										<div className="inner">
											<div className="thumb data-effect-item">
												<img src="assets/img/imagebox/image-box-3-370x250.jpg" alt="Image" />
												<div className="overlay-effect bg-color-accent" />
											</div>
											<div className="text-wrap">
												<h5 className="heading">
													<a href="#">CONSTRUCTION</a>
												</h5>
												<span className="icon-wrap">
													<i className="fa fa-angle-right" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="themesflat-image-box style-1 has-icon icon-right w65 clearfix">
									<div className="image-box-item">
										<div className="inner">
											<div className="thumb data-effect-item">
												<img src="assets/img/imagebox/image-box-1-370x250.jpg" alt="Image" />
												<div className="overlay-effect bg-color-accent" />
											</div>
											<div className="text-wrap">
												<h5 className="heading">
													<a href="#">DESIGN & BUILD</a>
												</h5>
												<span className="icon-wrap">
													<i className="fa fa-angle-right" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="themesflat-image-box style-1 has-icon icon-right w65 clearfix">
									<div className="image-box-item">
										<div className="inner">
											<div className="thumb data-effect-item">
												<img src="assets/img/imagebox/image-box-2-370x250.jpg" alt="Image" />
												<div className="overlay-effect bg-color-accent" />
											</div>
											<div className="text-wrap">
												<h5 className="heading">
													<a href="#">BUILDING ENVELOPES</a>
												</h5>
												<span className="icon-wrap">
													<i className="fa fa-angle-right" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="themesflat-image-box style-1 has-icon icon-right w65 clearfix">
									<div className="image-box-item">
										<div className="inner">
											<div className="thumb data-effect-item">
												<img src="assets/img/imagebox/image-box-3-370x250.jpg" alt="Image" />
												<div className="overlay-effect bg-color-accent" />
											</div>
											<div className="text-wrap">
												<h5 className="heading">
													<a href="#">CONSTRUCTION MANAGEMENT</a>
												</h5>
												<span className="icon-wrap">
													<i className="fa fa-angle-right" />
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className="themesflat-spacer clearfix"
							data-desktop="50"
							data-mobile="35"
							data-smobile="35"
						/>
						<div className="elm-button text-center">
							<a href="#" className="themesflat-button bg-accent">
								ALL SERVICES
							</a>
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
