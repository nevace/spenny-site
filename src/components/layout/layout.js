import React from 'react';
import { node } from 'prop-types';
import '../../global.css';
import 'whatwg-fetch';
import { Background, Container } from './layout.styles';
import Header from '../header';
import Footer from '../footer/footer';

const Layout = ({ children, bgImg }) => (
	<Background bgImg={bgImg}>
		<Container>
			<Header />
			{children}
			<Footer />
		</Container>
	</Background>
);

Layout.propTypes = {
	children: node.isRequired
};

export default Layout;
