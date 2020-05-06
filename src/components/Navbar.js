import React from 'react';
//import { Link } from 'gatsby';
import MegaMenu from './MegaMenu';
import logo from '../../static/assets/img/logo.png';
import logoSmall from '../../static/assets/img/logo-small.png';

const Navbar = class extends React.Component {

  onClick = (e) => {
    e.preventDefault()
  }

	render() {
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
										<a href="https://www.facebook.com/CMEArgentina" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-facebook" />
										</a>
										<a href="https://www.instagram.com/cmeargentina/?hl=es-la" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-instagram" />
										</a>
										<a href="https://www.linkedin.com/company/cmeargentinasa/" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-linkedin" />
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<header id="site-header">
					<div id="site-header-inner" className="container">
						<div className="wrap-inner clearfix">
							<div id="site-logo" className="clearfix">
								<div id="site-log-inner">
									<a href="/" rel="home" className="main-logo">
										<img
											src={logo}
											alt="Autora"
											width="140"
											data-retina={logoSmall}
											data-width="60"
										/>
									</a>
								</div>
							</div>

							<div className="mobile-button">
								<span />
							</div>

							<nav id="main-nav" className="main-nav">
								<ul id="menu-primary-menu" className="menu">
									<li className="menu-item current-menu-item">
										<a href="index.html">HOME</a>
									</li>
									<li className="dropdown megamenu menu-item menu-item-has-children">
										<a id="megamenu" onClick={this.onClick} role='button' tabIndex={0}>
											PRODUCTOS
										</a>
										<MegaMenu />
									</li>
									<li className="menu-item">
										<a href="index.html">ESTRUCTURAS</a>
									</li>
									<li className="menu-item menu-item-has-children">
										<a href="/">MERCADOS</a>
										<ul className="sub-menu">
											<li className="menu-item">
												<a href="/">ABOUT US</a>
											</li>
										</ul>
									</li>
									<li className="menu-item menu-item-has-children">
										<a onClick={this.onClick} role='button' tabIndex={0}>NOSTROS </a>
										<ul className="sub-menu">
											<li className="menu-item">
												<a href="/">ABOUT US</a>
											</li>
											<li className="menu-item">
												<a href="/">ABOUT DETAIL</a>
											</li>
											<li className="menu-item">
												<a href="/">ABOUT TEAM</a>
											</li>
											<li className="menu-item">
												<a href="/">ABOUT CAREERS</a>
											</li>
										</ul>
									</li>
									<li className="menu-item">
										<a href="/">BLOG</a>
									</li>
									<li className="menu-item">
										<a href="/">CONTACTO</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>
			</div>
		);
	}
};

export default Navbar;
