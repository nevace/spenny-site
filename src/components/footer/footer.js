import React from 'react';
import { FooterStyled } from './footer.styles';

const Footer = () => (
	<FooterStyled>
		<p>Copyright Spenny {new Date().getFullYear()}. All rights reserved.</p>
	</FooterStyled>
);

export default Footer;
