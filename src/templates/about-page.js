import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PorQueElegirnos from '../components/PorQueElegirnos';
import {Helmet} from 'react-helmet';

export const AboutPageTemplate = ({ title, content, contentComponent, porQueElegirnos, metaDescription }) => {
	const PageContent = contentComponent || Content;

	return (
		<Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
			<div id="site-content" className="site-content clearfix">
				<div id="inner-content" className="inner-content-wrap">
					<div className="themesflat-spacer clearfix" data-desktop="61" data-mobile="60" data-smobile="60" />
					<div className="themesflat-headings style-2 clearfix">
						<h1 className="heading">{title.toUpperCase()}</h1>
						<div className="sep has-width w80 accent-bg clearfix" />
						<div className="sub-heading line-height-24 text-777 margin-top-28 margin-right-12">
              <PageContent className="content" content={content} />
						</div>
					</div>
					<div className="themesflat-spacer clearfix" data-desktop="28" data-mobile="35" data-smobile="35" />
				
          <PorQueElegirnos porQueElegirnos={porQueElegirnos} mostrarLinkAbout={false} />

        </div>
			</div>
		</Fragment>
	);
};

AboutPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {

  const { about: post } = data;
  const { porQueElegirnos: pe } = data;
  const pelegirnos = pe.frontmatter.PorQueElegirnos
	return (
		<Layout classContentWrap="container" featuredTitleObj={{ title: 'QUIENES SOMOS', section: 'Quienes somos' }}>
      <AboutPageTemplate contentComponent={HTMLContent} 
                          title={post.frontmatter.title} 
						  content={post.html} 
						  metaDescription={post.metaDescription}
                          porQueElegirnos={pelegirnos}/>
		</Layout>
	);
};

AboutPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
	query AboutPage($id: String!) {
		about: markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
        		metaDescription
			}
    }
    porQueElegirnos: markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        PorQueElegirnos {
          iconos {
            icono
            titulo
            subTitulo
          }
          titulo
          subtitulo
        }
      }
    }
	}
`;
