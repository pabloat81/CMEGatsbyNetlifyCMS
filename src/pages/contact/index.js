import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';

function encode(data) {
	return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
}

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isValidated: false };
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;

		try {
			let response = await fetch('/.netlify/functions/sendmail', {
				method: 'POST',
				body: JSON.stringify(this.state)
			});

			if (response.status != 200) {
				alert('Error al enviar el formulario');
				console.log(response.body);
			} else navigate(form.getAttribute('action'));
		} catch (error) {
			alert(error);
		}
	};

	render() {
		return (
			<Layout featuredTitleObj={{ title: 'CONTACTO', section: 'Contacto' }}>
				<Helmet>
					<title>Contacto</title>
				</Helmet>

				<div id="site-content" className="site-content clearfix">
					<div id="inner-content" className="inner-content-wrap">
						<div className="page-content">
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
												<h2 className="heading">CONTACTENOS</h2>
												<div className="sep has-icon width-125 clearfix">
													<div className="sep-icon">
														<span className="sep-icon-before sep-center sep-solid" />
														<span className="icon-wrap">
															<i className="autora-icon-build" />
														</span>
														<span className="sep-icon-after sep-center sep-solid" />
													</div>
												</div>
												<p className="sub-heading font-weight-400 max-width-770 line-height-26 margin-top-14">
													Por favor envíenos sus requerimientos u otros comentarios.
												</p>
											</div>
											<div
												className="themesflat-spacer clearfix"
												data-desktop="45"
												data-mobile="35"
												data-smobile="35"
											/>
										</div>
									</div>

									<div className="row gutter-16">
										<div className="col-md-4">
											<div className="themesflat-icon-box icon-top align-center  accent-color style-3 bg-light-snow clearfix">
												<div className="icon-wrap">
													<i className="fa fa-phone" />
												</div>
												<div className="text-wrap">
													<h5 className="heading">
														<a
															href="https://wa.me/5491159587595?text=Te%20contacto%20desde%20la%20web%20de%20CME"
															target="_blank"
														>
															Celulares durante la cuarentena: <br />
															(011) 1559587595 <br />
															(011) 1558109488 <br />
															(03327) 416051 / (0348) 4476189 / 4457077
														</a>
													</h5>
													<p className="sub-heading">Horario: de 8 a 17 hs</p>
													<span className="class more-link">
														<a href="#">Llámenos!</a>
													</span>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div
												className="themesflat-spacer clearfix"
												data-desktop="0"
												data-mobile="0"
												data-smobile="35"
											/>
											<div className="themesflat-icon-box icon-top align-center accent-color style-3 bg-light-snow clearfix">
												<div className="icon-wrap">
													<i className="fa fa-map" />
												</div>
												<div className="text-wrap">
													<h5 className="heading">
														<a
															href="https://www.google.com.ar/maps/place/CME+Argentina+S.A./@-34.4257838,-58.7229504,17z/data=!3m1!4b1!4m5!3m4!1s0x95bca1ee40c74fc5:0xd818b403907aeec1!8m2!3d-34.4257838!4d-58.7207617"
															target="_blank"
														>
															José Hernandez 370
															<br />
															Garín, Escobar (CP 1619)
															<br />
															Buenos Aires, Argentina
															<br />
															<br />
														</a>
													</h5>
													<p className="sub-heading">Lunes a viernes: 8 a 17 hs</p>
													<span className="class more-link">Sábados y Domingo: Cerrado</span>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div
												className="themesflat-spacer clearfix"
												data-desktop="0"
												data-mobile="0"
												data-smobile="35"
											/>
											<div className="themesflat-icon-box icon-top align-center accent-color style-3 bg-light-snow clearfix">
												<div className="icon-wrap">
													<i className="fa fa-envelope-o" />
												</div>
												<div className="text-wrap">
													<h5 className="heading">
														<a href="mailto:ventas@cmeargentina.com">
															VENTAS@CMEARGENTINA.COM
															<br />
															<br />
															<br />
															<br />
														</a>
													</h5>
													<p className="sub-heading">Escríbanos sus comentarios</p>
													<span className="class more-link">
														<a href="#">Escríbanos!</a>
													</span>
												</div>
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-12">
											<div
												className="themesflat-spacer clearfix"
												data-desktop="58"
												data-mobile="35"
												data-smobile="35"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="row-contact">
								<div className="container">
									<div className="row">
										<div className="col-md-8">
											<div
												className="themesflat-spacer clearfix"
												data-desktop="0"
												data-mobile="0"
												data-smobile="35"
											/>
											<div className="themesflat-map style-2" />
										</div>
										<div className="col-md-4">
											<div className="themesflat-contact-form style-2 w100 clearfix">
												<form
													name="contact"
													method="post"
													action="/contact/thanks/"
													data-netlify="true"
													data-netlify-honeypot="bot-field"
													onSubmit={this.handleSubmit}
													className="contact-form wpcf7-form"
												>
													{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
													<input type="hidden" name="form-name" value="contact" />
													<div hidden>
														<label>
															Don’t fill this out:{' '}
															<input name="bot-field" onChange={this.handleChange} />
														</label>
													</div>
													<span className="wpcf7-form-control-wrap your-name">
														<input
															className="wpcf7-form-control"
															placeholder="Nombre *"
															type={'text'}
															name={'name'}
															onChange={this.handleChange}
															id={'name'}
															required={true}
														/>
													</span>
													<span className="wpcf7-form-control-wrap your-email">
														<input
															className="wpcf7-form-control"
															placeholder="E-mail *"
															type={'email'}
															name={'email'}
															onChange={this.handleChange}
															id={'email'}
															required={true}
														/>
													</span>
													<span className="wpcf7-form-control-wrap your-phone">
														<input
															className="wpcf7-form-control"
															placeholder="Teléfono"
															type={'text'}
															name={'telefono'}
															onChange={this.handleChange}
															id={'telefono'}
														/>
													</span>
													<span className="wpcf7-form-control-wrap your-message">
														<textarea
															tabIndex="5"
															cols="40"
															rows="10"
															className="wpcf7-form-control wpcf7-textarea"
															placeholder="Mensaje *"
															name={'message'}
															onChange={this.handleChange}
															id={'message'}
															required={true}
														/>
													</span>
													<span className="wrap-submit">
														<input
															type="submit"
															value="Enviar"
															className="submit wpcf7-form-control wpcf7-submit"
															id="submit"
															name="submit"
														/>
													</span>
												</form>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div
												className="themesflat-spacer clearfix"
												data-desktop="81"
												data-mobile="60"
												data-smobile="60"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}
