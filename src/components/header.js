import React from 'react';
import { Link } from 'gatsby';
import spennyLogo from '../images/spenny-logo.svg';

const Header = () => (
	<header>
		<Link to="/">
			<img src={spennyLogo} alt="Spenny"/>
		</Link>
	</header>
);

export default Header;
