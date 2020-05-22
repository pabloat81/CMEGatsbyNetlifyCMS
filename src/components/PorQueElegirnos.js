import React from 'react';
import { Link } from 'gatsby';

const PorQueElegirnos = ({ porQueElegirnos, mostrarLinkAbout }) => {
	return (
		<div className="row-iconbox">
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
							<h2 className="heading">{porQueElegirnos.titulo}</h2>
							<div className="sep has-icon width-125 clearfix">
								<div className="sep-icon">
									<span className="sep-icon-before sep-center sep-solid" />
									<span className="icon-wrap">
										<i className="fa fa-wrench"></i>
									</span>
									<span className="sep-icon-after sep-center sep-solid" />
								</div>
							</div>
							<p className="sub-heading">{porQueElegirnos.subtitulo}</p>
						</div>
						<div
							className="themesflat-spacer clearfix"
							data-desktop="42"
							data-mobile="35"
							data-smobile="35"
						/>
					</div>
				</div>

				<div className="row">
					{porQueElegirnos.iconos.map((icono) => (
						<div key={icono.titulo} className="col-md-4">
							<div
								className="themesflat-content-box clearfix"
								data-margin="0 5px 0 5px"
								data-mobilemargin="0 0 0 0"
							>
								<div className="themesflat-icon-box icon-top align-center has-width w95 circle light-bg accent-color style-1 clearfix">
									<div className="icon-wrap">
										<i className={`fa ${icono.icono}`} />
									</div>
									<div className="text-wrap">
										<h5 className="heading">
											<a href="#">{icono.titulo}</a>
										</h5>
										<div className="sep clearfix" />
										<p className="sub-heading">{icono.subTitulo}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="row">
					<div className="col-md-12">
						<div
							className="themesflat-spacer clearfix"
							data-desktop="41"
							data-mobile="35"
							data-smobile="35"
						/>
						<div className="elm-button text-center" style={mostrarLinkAbout ? {display:'block'}: {display:'none'}}>
							<Link to="/about" className="themesflat-button bg-accent">
								NOSOTROS
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

export default PorQueElegirnos;
