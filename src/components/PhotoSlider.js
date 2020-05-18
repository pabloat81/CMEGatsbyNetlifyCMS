import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';


const PhotoSlider = ({ imagesArrayObj }) => {
	return (
		<div className="owl-carousel owl-theme">
			{imagesArrayObj &&
				imagesArrayObj.map((imageObj, index) => (
					<div key={index} className="gallery-item">
						<div className="inner">
							<div className="thumb">
								<PreviewCompatibleImage
									className="card-img-top"
									imageInfo={{
										image: imageObj.imagen,
										alt: imageObj.alt
									}}
								/>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default PhotoSlider;
