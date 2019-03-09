import styled from 'styled-components';
import media from 'styled-media-query';

export const FooterContent = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	max-width: 1180px;
	margin: 0 auto;

	p {
		font-size: 12px;
		line-height: 16px;
		color: #c4c4c4;
		width: 50%;
		margin: 0;

		${media.greaterThan('medium')`
			display: flex;
			font-size: 14px;
			line-height: 20px;
		`}
	}

	> div {
		display: flex;
		width: 50%;
		justify-content: flex-end;
	}

	a {
		display: flex;
		margin-right: 25px;

		&:last-child {
			margin-right: 0;
		}
	}
`;
