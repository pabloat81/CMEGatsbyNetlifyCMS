import React from 'react';
import { Link } from 'gatsby';

const DownloadsSideLinks = ( {descargasArrayObj} ) => {
	return (
		<div className="content-info info-brochures">
			<div className="themesflat-headings style-2 clearfix">
				<h2 className="heading line-height-62">CATÁLOGO</h2>
				<div className="sep has-width w60 accent-bg clearfix" />
			</div>
			<div className="themesflat-spacer clearfix" data-desktop="34" data-mobile="35" data-smobile="35" />
			
			{descargasArrayObj &&
					descargasArrayObj.map((descargaObj) => (
			<div className="button-wrap has-icon icon-left size-14 pf21">
				<a href={descargaObj.archivo.publicURL} className="themesflat-button font-default bg-light-white w100">
					<span>
						{descargaObj.nombreArchivo}
						<span className="icon">
							<i className="fa fa-file-pdf-o" />
						</span>
					</span>
				</a>
			</div>
					))}
		</div>
	);
};

export default DownloadsSideLinks;
