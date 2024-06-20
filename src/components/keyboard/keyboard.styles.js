import styled from 'styled-components';

const StyledKeyboard = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 1rem;
`;

const StyledLetter = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ccc;
	padding: 0.5rem;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: steelblue;
		}
	}
`;

export { StyledKeyboard, StyledLetter };
