import React from 'react';
import { node } from 'prop-types';
import '../../global.css';
import { Container } from './layout.styles';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => (
	<Container>
		<Header />
			{children}
		<Footer />
	</Container>
);

Layout.propTypes = {
	children: node.isRequired
};

export default Layout;
