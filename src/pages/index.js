import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { Content } from './index.styles';
import bgImg from '../images/spenny-bg.jpg';
import Select from 'react-select';

class IndexPage extends Component {
	state = { selectedOption: null };

	handleChange = selectedOption => {
		this.setState({ selectedOption });
	};

	handleSubmit = e => {
		e.preventDefault();

		const emailAddress = document.getElementById('email-address');
		const termsCheckbox = document.getElementById('terms-checkbox');

		if (!termsCheckbox.checked || !this.state.selectedOption) {
			return;
		}

		this.mailchimpSubscribe({ EMAIL: emailAddress.value });
	};

	mailchimpSubscribe(data) {
		fetch('https://spenny.us20.list-manage.com/subscribe/post-json?u=11c9e204a80ff972a2bb4f1a9&id=8f7d60084a&c=?', {
			mode: 'no-cors',
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});
	}

	render() {
		return (
			<Layout bgImg={bgImg}>
				<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
				<Content>
					<div>
						<h1>Spend more. Get more.</h1>
						<p>
							Creating a digital solution that incentivises frequent diners with high-end restaurants and bars through
							our mobile app.
						</p>
					</div>
					<div>
						<form onSubmit={this.handleSubmit}>
							<label htmlFor="emailAddress">Register now for early release</label>
							<input id="email-address" name="emailAddress" type="email" placeholder="Email Address" required />
							<Select
								classNamePrefix="react-select"
								placeholder="I am a..."
								value={this.state.selectedOption}
								onChange={this.handleChange}
								options={[{ value: 'user', label: 'User' }, { value: 'merchant', label: 'Merchant' }]}
							/>
							<label>
								<input id="terms-checkbox" type="checkbox" /> <p>I agree to the terms and conditions</p>
							</label>
							<button type="submit">Register interest</button>
						</form>
					</div>
				</Content>
			</Layout>
		);
	}
}

export default IndexPage;
