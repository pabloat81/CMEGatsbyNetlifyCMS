import React from 'react';
//import { Link } from 'gatsby';

const MegaMenu = class extends React.Component {


	render() {
		return (
			<ul className="sub-menu mega">
				<li>
					<div className="dropdown-menu border-0 p-0 m-0 mega">
						<div className="container">
							<div className="row bg-megamenu rounded-0 m-0 shadow-sm">
								<div className="col-lg-12 col-xl-12">
									<div className="p-4">
										<div className="row">
											<div className="col-lg-3 mb-3">
												<a href="/" className="card">
													<div className="card">
														<img
															src="assets/img/imagebox/image-box-1-370x250.jpg"
															className="card-img-top"
															alt="..."
														/>
														<div className="card-body">
															<p className="card-text">REJILLAS DE PISO</p>
														</div>
													</div>
												</a>
											</div>
											<div className="col-lg-3 mb-3">
												<a href="/" className="card">
													<div className="card">
														<img
															src="assets/img/imagebox/image-box-1-370x250.jpg"
															className="card-img-top"
															alt="..."
														/>
														<div className="card-body">
															<p className="card-text">BANDEJAS PORTACABLES</p>
														</div>
													</div>
												</a>
											</div>
											<div className="col-lg-3 mb-3">
												<a href="/" className="card">
													<div className="card">
														<img
															src="assets/img/imagebox/image-box-1-370x250.jpg"
															className="card-img-top"
															alt="..."
														/>
														<div className="card-body">
															<p className="card-text">BARANDAS</p>
														</div>
													</div>
												</a>
											</div>
											<div className="col-lg-3 mb-3">
												<a href="/" className="card">
													<div className="card">
														<img
															src="assets/img/imagebox/image-box-1-370x250.jpg"
															className="card-img-top"
															alt="..."
														/>
														<div className="card-body">
															<p className="card-text">SISTEMAS DE CIRCULACION</p>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		);
	}
};

export default MegaMenu;
