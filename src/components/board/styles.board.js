import styled from 'styled-components';

const StyledBoard = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
`;

const StyledEmptyLetter = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 30px;
	background-color: orange;
`;

export { StyledBoard, StyledEmptyLetter };
