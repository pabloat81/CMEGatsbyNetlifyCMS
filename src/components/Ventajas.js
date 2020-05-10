import React from 'react';
import { Link } from 'gatsby'

const Ventajas = ({ventajas}) => {
	const v = {tituloVentaja: 'EJEMPLO', 
				subTituloVentaja: 'We develop and understand project expectations and then manage those needs with a design team. Innovation should happen throughout a project.', 
				Icono: 'fa-pencil'}

	const ventajaItem = (i) => {
		if(ventajas.iconosVentajas[i])
			return ventajas.iconosVentajas[i] 
		return v
	}

	return (
		<div className="row-iconbox">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div
							className="themesflat-spacer clearfix"
							data-desktop="61"
							data-mobile="60"
							data-smobile="60"
						/>
						<div className="themesflat-headings style-1 text-center clearfix">
							<h2 className="heading font-size-30">{ventajas.titulo}</h2>
							<div className="sep has-icon width-125 clearfix">
								<div className="sep-icon">
									<span className="sep-icon-before sep-center sep-solid" />
									<span className="icon-wrap">
										<i className="autora-icon-build" />
									</span>
									<span className="sep-icon-after sep-center sep-solid" />
								</div>
							</div>
							<p className="sub-heading font-weight-400">
								{ventajas.subtitulo}
							</p>
						</div>
						<div
							className="themesflat-spacer clearfix"
							data-desktop="57"
							data-mobile="35"
							data-smobile="35"
						/>
					</div>
				</div>

				<div className="themesflat-row gutter-30 clearfix">
					<div className="col span_1_of_4">
						<div className="themesflat-icon-box icon-left accent-color style-2 clearfix">
							<div className="icon-wrap">
								<i className={`fa ${ventajaItem(0).Icono}`} />
							</div>
							<div className="text-wrap">
								<h5 className="heading">
									<Link to="/">{ventajaItem(0).tituloVentaja}</Link>
								</h5>
								<p className="sub-heading">
									{ventajaItem(0).subTituloVentaja}{' '}
								</p>
							</div>
						</div>
						<div
							className="themesflat-spacer clearfix"
							data-desktop="62"
							data-mobile="35"
							data-smobile="35"
						/>
						<div className="themesflat-icon-box icon-left accent-color style-2 clearfix">
							<div className="icon-wrap font-size-35 line-height-50">
								<i className={`fa ${ventajaItem(1).Icono}`} />
							</div>
							<div className="text-wrap">
								<h5 className="heading">
								<Link to="/">{ventajaItem(1).tituloVentaja}</Link>
								</h5>
								<p className="sub-heading margin-top-18">
								{ventajaItem(1).subTituloVentaja}{' '}
								</p>
							</div>
						</div>
					</div>

					<div className="col span_1_of_4">
						<div
							className="themesflat-spacer clearfix"
							data-desktop="0"
							data-mobile="35"
							data-smobile="35"
						/>
						<div className="themesflat-icon-box icon-left accent-color style-2 clearfix">
							<div className="icon-wrap">
								<i className={`fa ${ventajaItem(2).Icono}`} />
							</div>
							<div className="text-wrap">
								<h5 className="heading">
								<Link to="/">{ventajaItem(2).tituloVentaja}</Link>
								</h5>
								<p className="sub-heading">
								{ventajaItem(2).subTituloVentaja}{' '}
								</p>
							</div>
						</div>
						<div
							className="themesflat-spacer clearfix"
							data-desktop="62"
							data-mobile="35"
							data-smobile="35"
						/>
						<div className="themesflat-icon-box icon-left accent-color style-2 clearfix">
							<div className="icon-wrap ">
								<i className={`fa ${ventajaItem(3).Icono}`} />
							</div>
							<div className="text-wrap">
								<h5 className="heading">
								<Link to="/">{ventajaItem(3).tituloVentaja}</Link>
								</h5>
								<p className="sub-heading margin-top-18">
								{ventajaItem(3).subTituloVentaja}{' '}
								</p>
							</div>
						</div>
					</div>

					<div className="col span_1_of_4">
						<div
							className="themesflat-spacer clearfix"
							data-desktop="0"
							data-mobile="35"
							data-smobile="35"
						/>
						<div className="themesflat-icon-box icon-left accent-color style-2 clearfix">
							<div className="icon-wrap">
								<i className={`fa ${ventajaItem(4).Icono}`} />
							</div>
							<div className="text-wrap">
								<h5 className="heading">
								<Link to="/">{ventajaItem(4).tituloVentaja}</Link>
								</h5>
								<p className="sub-heading">
									{' '}
									{ventajaItem(4).subTituloVentaja}{' '}
								</p>
							</div>
						</div>
						<div
							className="themesflat-spacer clearfix"
							data-desktop="62"
							data-mobile="35"
							data-smobile="35"
						/>
						<div className="themesflat-icon-box icon-left accent-color style-2 clearfix">
							<div className="icon-wrap font-size-35 line-height-50">
								<i className={`fa ${ventajaItem(5).Icono}`} />
							</div>
							<div className="text-wrap">
								<h5 className="heading">
								<Link to="/">{ventajaItem(5).tituloVentaja}</Link>
								</h5>
								<p className="sub-heading margin-top-18">
								{ventajaItem(5).subTituloVentaja}{' '}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div
							className="themesflat-spacer clearfix"
							data-desktop="72"
							data-mobile="60"
							data-smobile="60"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ventajas;
