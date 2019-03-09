import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-rows: 100px auto 50px;
	grid-template-columns: 1fr;
	height: 100vh;

	header {
		padding: 0 15px;
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
		background: rgba(0, 0, 0, 0.17);
		padding: 0 15px;
	}
`;
