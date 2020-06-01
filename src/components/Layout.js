import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FeaturedTitle from './FeaturedTitle'
import PropTypes from 'prop-types';

import './style.css';

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
	googleMap,
	flatCounter,
	flatIsotope,
	swClick,
	flatOwl,
	Parallax,
	inViewport,
	mobileMenuEvents,
	mobileNav,
	scrollToTop,
	retinaLogo
} from './utils/flatThemeUtils';

const TemplateWrapper = ({ children, sidebar, addPaddingTop, classContentWrap, featuredTitleObj }) => {
	const sidebarType = () => {
		if(!sidebar) return 'no-sidebar'
		return sidebar
	}

	const { title, description } = useSiteMetadata();

	useEffect(() => {
		//jQuery('.owl-carousel').owlCarousel({margin: 30})
		mobileNav();
		mobileMenuEvents();
		flatSpacer();
		flatContentBox();
		flatEqualizeHeight();
		flatGallery();
		searchIcon();
		flatTabs();
		flatAccordions();
		flatProgressBar();
		googleMap();
		flatCounter();
		flatIsotope();
		swClick();
		flatOwl();
		Parallax();
		inViewport();
		scrollToTop();
		retinaLogo();
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

				
				<link rel="shortcut icon" href={`${withPrefix('/')}img/favicon.ico`} sizes="16x16" />
				
				{/*
				<link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
				<link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
				<link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />
				<link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#ff4400" />*/}
				<meta name="theme-color" content="#fff" />

				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />
				<meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
			</Helmet>

			<div id="wrapper" className={`header-fixed page ${sidebarType()} header-style-2 topbar-style-1 animsition`}>
				<div id="page" className="clearfix">
					<Navbar />

					<FeaturedTitle featuredTitleObj={featuredTitleObj}/>
					<div id="main-content" className="site-main clearfix" style={addPaddingTop ? {padding: '81px 0px'} : {}}>
						<div id="content-wrap" className={classContentWrap}>
							{children}
						</div>
					</div>

					<Footer />
				</div>
			</div>
			<a id="scroll-top" />
		</Fragment>
	);
};

TemplateWrapper.propTypes = {
	sidebar: PropTypes.string, //classname
	addPaddingTop: PropTypes.bool, 
	classContentWrap: PropTypes.string, //classname
	featuredTitleObj: PropTypes.object // {title: '', section: ''}
};

export default TemplateWrapper;
