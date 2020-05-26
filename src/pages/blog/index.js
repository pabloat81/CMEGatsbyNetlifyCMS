import React from 'react';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import BlogSidebar from '../../components/blog/BlogSidebar';
import { Helmet } from 'react-helmet';

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout
				sidebar="sidebar-right"
				addPaddingTop={true}
				classContentWrap="container"
				featuredTitleObj={{ title: 'BLOG', section: 'Blog' }}
			>
				<Helmet>
					<title>Blog</title>
				</Helmet>
				<div id="site-content" className="site-content clearfix">
					<div id="inner-content" className="inner-content-wrap">
						<BlogRoll />
					</div>
				</div>
				<BlogSidebar></BlogSidebar>
			</Layout>
		);
	}
}
