import { useState } from 'react';
import Board from './components/board/Board';
import Keyboard from './components/keyboard/Keyboard';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [guessLetters, setGuessLetters] = useState([]);
	const [usedLetters, setUsedLetters] = useState([]);
	return (
		<>
			<GlobalStyles />
			<h1>HANGMAN</h1>
			<Board />
			<Keyboard usedLetters={usedLetters} setUsedLetters={setUsedLetters} />
		</>
	);
};

export default App;
