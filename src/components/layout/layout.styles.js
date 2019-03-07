import styled from 'styled-components';

export const Background = styled.div`
display: flex;
    justify-content: center;
	background: url(${({ bgImg }) => bgImg}) center / cover no-repeat;
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: 50px auto 50px;
	grid-column-gap: 30px;
	max-width: 1180px;
	height: 100vh;
	margin: 0 15px;

	> * {
		grid-column: span 12;
	}

	header {
		align-self: end;
	}

	main {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-column-gap: 30px;
	}
`;
