import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
	display: grid;
	grid-template-rows: 50px auto 50px;
	height: 100vh;
	background: url(${({ bgImg }) => bgImg}) center / cover no-repeat;

	header {
		align-self: end;
		width: 100%;
		margin: 0 auto;
		padding: 0 15px;
		max-width: 1180px;
	}

	main {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-column-gap: 30px;
		justify-self: center;
		max-width: 1180px;
		margin-left: 15px;
		margin-right: 15px;
	}

	footer {
		padding: 0 15px;
		background: rgba(0, 0, 0, 0.17);
	}
`;
