import React, { Fragment } from 'react';


const ProsAndCons = ({ ventajasObj }) => {
	return (
		<Fragment>
			<div className="themesflat-spacer clearfix" data-desktop="37" data-mobile="35" data-smobile="35" />
			<div className="flat-content-wrap style-2 clearfix">
	<h5 className="title no-letter-spacing">{ventajasObj.titulo.toUpperCase()}</h5>
				<div className="themesflat-spacer clearfix" data-desktop="27" data-mobile="27" data-smobile="27" />
				<div className="themesflat-tabs style-2 title-w170 clearfix">
					<ul className="tab-title clearfix ">
					{ventajasObj &&
					ventajasObj.listaVentajas.map((ventaja, index) => (
						
						<li key={index} className={`item-title ${index === 0 ? 'active' : ''}`}>
							<span className="inner">{ventaja.titulo}</span>
						</li>
					))}
					</ul>

					<div className="tab-content-wrap clearfix">
					{ventajasObj &&
					ventajasObj.listaVentajas.map((ventaja, index) => (
						
						<div key={index} className="tab-content">
							<div className="item-content">
								<p>
									{ventaja.descripcion}
								</p>
							</div>
						</div>
					))}
					</div>
				</div>
			</div>
			<div className="themesflat-spacer clearfix" data-desktop="80" data-mobile="60" data-smobile="60" />
		</Fragment>
	);
};

export default ProsAndCons;
