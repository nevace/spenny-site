import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import bgImg from '../images/spenny-bg.jpg';
import Select from 'react-select';
import styled from 'styled-components';
import media from 'styled-media-query';
import Helmet from 'react-helmet';

class IndexPage extends Component {
	state = { selectedOption: null, subscribed: false };

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

		this.mailchimpSubscribe({ EMAIL: emailAddress.value, TYPE: this.state.selectedOption.value });
	};

	async mailchimpSubscribe({ EMAIL, TYPE }) {
		const formData = new FormData();

		formData.append('EMAIL', EMAIL);
		formData.append('TYPE', TYPE);

		try {
			await fetch(
				'https://spenny.us20.list-manage.com/subscribe/post-json?u=11c9e204a80ff972a2bb4f1a9&id=8f7d60084a&c=?',
				{
					mode: 'no-cors',
					method: 'POST',
					body: formData
				}
			);

			this.setState({ subscribed: true });
		} catch (e) {
			console.error(e);
		}
	}

	render() {
		return (
			<>
				<Helmet
					htmlAttributes={{
						class: 'page-index'
					}}
				/>
				<Layout bgImg={bgImg}>
					<SEO title="Spenny" keywords={['spenny', 'cashback', 'rewards', 'card linked offers']} />
					<Content>
						<div>
							<h1>Spend more. Get more.</h1>
							<p>
								Creating a digital solution that incentivises frequent diners with high-end restaurants and bars through
								our mobile app.
							</p>
						</div>
						<div>
							{this.state.subscribed ? (
								<SuccessMessage>
									Thank you for registering your interest in Spenny. We will be in contact once we have our application
									live.
								</SuccessMessage>
							) : (
								<form onSubmit={this.handleSubmit}>
									<label htmlFor="emailAddress">Register now for early release</label>
									<input
										id="email-address"
										name="emailAddress"
										type="email"
										placeholder="Email Address"
										autoComplete="off"
										required
									/>
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
							)}
						</div>
					</Content>
				</Layout>
			</>
		);
	}
}

const Content = styled.main`
	font-size: 22px;
	line-height: 32px;
	color: #fff;

	p {
		font-size: 16px;
		line-height: 22px;

		${media.greaterThan('medium')`
				font-size: 22px;	
				line-height: 32px;
		`}
	}

	h1 {
		font-size: 32px;
		line-height: 28px;
		margin-bottom: 50px;

		${media.greaterThan('medium')`
				font-size: 48px;
				line-height: 55px;
		`}
	}

	> div {
		grid-column: span 12;

		&:first-child {
			align-self: end;

			${media.greaterThan('medium')`
				grid-column: span 7;
				grid-row: 2 / 3;
				align-self: auto;
			`}
		}

		&:last-child {
			${media.greaterThan('medium')`
				grid-column: span 5;
				grid-row: 2 / 3;
			`}
		}

		label {
			display: flex;
			align-items: end;
			font-size: 16px;
			line-height: 26px;

			${media.greaterThan('medium')`
					font-size: 18px;
					line-height: 32px;
			`}

			p {
				margin: 0 0 0 10px;
				font-size: 14px;
				line-height: 16px;
			}
		}
	}

	.react-select__control {
		margin-bottom: 20px;
		font-size: 16px;
		line-height: 34px;
		box-shadow: none;
		border: none;
		cursor: pointer;

		&:hover {
			border: none;
		}
	}

	.react-select__single-value {
		color: #000;
	}

	.react-select__option {
		font-size: 16px;
		line-height: 34px;
		color: #969eb2;
	}

	.react-select__option:hover {
		color: #fff;
		background: #969eb2;
	}

	.react-select__option--is-selected {
		color: #fff;
		background: #969eb2;
	}

	input[type='email'] {
		width: 100%;
		height: 46px;
		border-radius: 4px;
		margin-top: 13px;
		margin-bottom: 15px;
		padding: 2px 8px;
		font-size: 16px;
		line-height: 34px;

		&::placeholder {
			color: #969eb2;
		}
	}

	input[type='checkbox'] {
		width: 20px;
		height: 20px;
		cursor: pointer;

		+ p {
			cursor: pointer;
		}
	}

	button {
		height: 42px;
		width: 177px;
		color: #fff;
		background: transparent;
		border: 2px solid #fff;
		border-radius: 4px;
		font-size: 16px;
		line-height: 18px;
		cursor: pointer;
		margin-top: 16px;
		user-select: nome;

		&:hover {
			background-color: #fff;
			color: #353535;
			transition: background-color ease-in-out 0.05s;
		}
	}
`;

const SuccessMessage = styled.p`
	font-size: 18px;
	line-height: 24px;
`;

export default IndexPage;
