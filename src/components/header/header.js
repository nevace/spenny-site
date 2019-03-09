import React from 'react';
import { Link } from 'gatsby';
import spennyLogo from '../../images/spenny-logo.svg';
import {HeaderContent} from './header.styles'

const Header = () => (
	<header>
		<HeaderContent>
		<Link to="/">
			<img src={spennyLogo} alt="Spenny"/>
		</Link>
		</HeaderContent>
	</header>
);

export default Header;
