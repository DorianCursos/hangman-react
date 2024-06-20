import { v4 } from 'uuid';
import { StyledBoard, StyledEmptyLetter } from './styles.board';
import { useState } from 'react';

const word = 'ORDENADOR';

const Board = () => {
	const [guessLetters, setGuessLetters] = useState([]);

	const hyphensWord = getHyphens(word);
	return (
		<StyledBoard>
			{hyphensWord.map(hyphen => (
				<StyledEmptyLetter key={v4()}>{hyphen}</StyledEmptyLetter>
			))}
		</StyledBoard>
	);
};

const getHyphens = word => {
	return word.replaceAll(/[a-z]/gi, '-').split('');
};

export default Board;
