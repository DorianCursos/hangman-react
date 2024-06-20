import { v4 } from 'uuid';

const ALPHABET = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'Ñ',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];

const ALPHABET_WITH_ID = ALPHABET.map(letter => ({
	id: v4(),
	value: letter
}));

export { ALPHABET_WITH_ID };
