import React from 'react';
import { FooterContent } from './footer.styles';
import InstaLogo from 'react-ionicons/lib/LogoInstagram';
import TwitterLogo from 'react-ionicons/lib/LogoTwitter';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Footer = () => (
	<footer>
		<FooterContent>
			<p>
				<div>Copyright Spenny {new Date().getFullYear()}.</div> <div>All rights reserved.</div>
			</p>
			<div>
				<OutboundLink href="#" target="_blank">
					<InstaLogo color="#c4c4c4" />
				</OutboundLink>
				<OutboundLink href="#" target="_blank">
					<TwitterLogo color="#c4c4c4" />
				</OutboundLink>
			</div>
		</FooterContent>
	</footer>
);

export default Footer;
