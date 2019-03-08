import React from 'react';
import { FooterContent } from './footer.styles';
import InstaLogo from 'react-ionicons/lib/LogoInstagram';
import TwitterLogo from 'react-ionicons/lib/LogoTwitter';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Footer = () => (
	<footer>
		<FooterContent>
			<p>
				<span>Copyright Spenny {new Date().getFullYear()}.</span> <span>All rights reserved.</span>
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
