import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import MegaMenu from './MegaMenu';
import logo from '../../static/assets/img/logo.png';
import logoSmall from '../../static/assets/img/logo-small.png';
import MercadosNavBarLinks from './mercados/MercadosNavBarLinks';

const Navbar = () => {


	const [ isSticky, setSticky ] = useState(false);
	const ref = useRef(null);

	const handleScroll = () => {
		if (ref.current) {
			setSticky(window.pageYOffset > ref.current.getBoundingClientRect().top);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', () => handleScroll);
		};
	}, []);

	return (
		<div id="site-header-wrap">
			<div id="top-bar">
				<div id="top-bar-inner" className="container">
					<div className="top-bar-inner-wrap">
						<div className="top-bar-content">
							<div className="inner">
								<span className="address content">José Hernandez 370, Garín</span>
								<span className="phone content">(011) 1559587595 / 1558109488</span>
								<span className="time content">Lun-Vie: 8 - 17 hs</span>
							</div>
						</div>

						<div className="top-bar-socials">
							<div className="inner">
								<span className="text">Seguinos:</span>
								<span className="icons">
									<a
										href="https://www.facebook.com/CMEArgentina"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-facebook" />
									</a>
									<a
										href="https://www.instagram.com/cmeargentina/?hl=es-la"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-instagram" />
									</a>
									<a
										href="https://www.linkedin.com/company/cmeargentinasa/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-linkedin" />
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<header id="site-header" className={isSticky ? 'is-fixed' : ''} ref={ref}>
				<div id="site-header-inner" className="container">
					<div className="wrap-inner clearfix">
						<div id="site-logo" className="clearfix">
							<div id="site-log-inner">
								<Link to="/" className="main-logo">
									<img
										src={logo}
										alt="CME Argentina"
										width="130"
										data-retina={logoSmall}
										data-width="60"
									/>
								</Link>
							</div>
						</div>

						<div className="mobile-button">
							<span />
						</div>

						<nav id="main-nav" className="main-nav">
							<ul id="menu-primary-menu" className="menu">
								<li className="menu-item ">
									<Link to="/" activeClassName="current-menu-item">
										HOME
									</Link>
								</li>
								<li className="dropdown megamenu menu-item menu-item-has-children">
									<Link id="megamenu" to="/productos">
										PRODUCTOS
									</Link>
									<MegaMenu />
								</li>
								<li className="menu-item">
									<Link to="/estructuras">ESTRUCTURAS</Link>
								</li>
								<li className="menu-item menu-item-has-children">
									<Link to="/mercados">MERCADOS</Link>
									<MercadosNavBarLinks/>
								</li>
								<li className="menu-item menu-item-has-children">
									<Link to='/about'>
										EMPRESA
									</Link>
									<ul className="sub-menu">
										<li className="menu-item">
											<Link to="/about">QUIENES SOMOS</Link>
										</li>
										<li className="menu-item">
											<Link to="/FAQ">FAQs</Link>
										</li>
										<li className="menu-item">
											<a href="/">QUE ES EL MATERIAL COMPUESTO</a>
										</li>
									</ul>
								</li>
								<li className="menu-item">
									<Link to="/blog" activeClassName="current-menu-item">
										BLOG
									</Link>
								</li>
								<li className="menu-item">
									<Link to="/contact">CONTACTO</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
