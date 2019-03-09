import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
	display: grid;
	grid-template-rows: 50px auto 50px;
	height: 100vh;
	background: url(${({ bgImg }) => bgImg}) center / cover no-repeat;

	main,
	footer {
		margin-left: 15px;
		margin-right: 15px;
	}

	header {
		align-self: end;
		width: 100%;
		margin: 0 auto;
		max-width: 1180px;

		${media.lessThan('medium')`
			padding: 0 15px;
		`}
	}

	main {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-column-gap: 30px;
		justify-self: center;
		max-width: 1180px;

		p {
			${media.lessThan('medium')`
				font-size: 16px;
				line-height: 22px;
			`}
		}

		h1 {
			${media.lessThan('medium')`
				font-size: 32px;
				line-height: 28px;
				margin-bottom: 50px;
			`}
		}
	}

	footer {
		background: rgba(0, 0, 0, 0.17);
	}
`;
