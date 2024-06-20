import { ALPHABET_WITH_ID } from '../../constants/alphabet';
import { StyledKeyboard, StyledLetter } from './keyboard.styles';

const Keyboard = () => {
	return (
		<StyledKeyboard>
			{ALPHABET_WITH_ID.map(letter => (
				<StyledLetter key={letter.id}>{letter.value}</StyledLetter>
			))}
		</StyledKeyboard>
	);
};

export default Keyboard;
