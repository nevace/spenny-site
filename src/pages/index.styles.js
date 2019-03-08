import styled from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.main`
	font-size: 22px;
	line-height: 32px;
	color: #fff;

	${media.greaterThan('medium')`
			margin-top: 200px;
	`}

	> div {
		grid-column: span 12;

		&:first-child {
			align-self: end;

			${media.greaterThan('medium')`
			 align-self: start;
		`}
		}

		${media.greaterThan('medium')`
			&:first-child {
				grid-column: span 7;
			}
	
			&:last-child {
				grid-column: span 5;
			}  
		`}

		label {
			display: flex;
			align-items: end;
			font-size: 18px;
			line-height: 32px;

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
	}
`;
