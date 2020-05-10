import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import 'bootstrap/dist/css/bootstrap.css';
import '../../static/assets/css/animate.css';
import '../../static/assets/css/owl.carousel.css';
import '../../static/assets/css/font-awesome.css';
import '../../static/assets/css/ionicons.css';
import '../../static/assets/css/font-etline.css';
import '../../static/assets/css/autora-icons.css';
import '../../static/assets/css/shortcodes.css';
import './style.css';
//import $ from 'jquery';

import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

import {
	flatSpacer,
	flatContentBox,
	flatEqualizeHeight,
	flatGallery,
	searchIcon,
	flatTabs,
	flatAccordions,
	flatProgressBar,
	//googleMap,
	flatCounter,
	flatIsotope,
	swClick,
	flatOwl,
	Parallax,
	inViewport
} from './utils/flatThemeUtils';

const TemplateWrapper = ({ children }) => {
	const { title, description } = useSiteMetadata();

	useEffect(() => {
		//jQuery('.owl-carousel').owlCarousel({margin: 30})
		flatSpacer();
		flatContentBox();
		flatEqualizeHeight();
		flatGallery();
		searchIcon();
		flatTabs();
		flatAccordions();
		flatProgressBar();
		//googleMap();
		flatCounter();
		flatIsotope();
		swClick();
		flatOwl();
		Parallax();
		inViewport();

		console.log('pase')
	}, []);

	return (
		<Fragment>
			<Helmet>
				<html lang="es" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<meta charset="utf-8" />

				<meta name="author" content="ignosoftware.com" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

				<link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
				<link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
				<link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />

				<link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#ff4400" />
				<meta name="theme-color" content="#fff" />

				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />
				<meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
			</Helmet>

			<div id="wrapper" className="header-fixed page no-sidebar header-style-2 topbar-style-2 animsition">
				<div id="page" className="clearfix">
					<Navbar />

					<div id="main-content" className="site-main clearfix">
						<div id="content-wrap">
							<div id="site-content" className="site-content clearfix">
								<div id="inner-content" className="inner-content-wrap">
									{children}
								</div>
							</div>
						</div>
					</div>

					<Footer />
				</div>
			</div>
			<a id="scroll-top" />
		</Fragment>
	);
};

export default TemplateWrapper;
