import { shuffleArray } from './utilities';

export const fetchApi = async (amount: string, category: string, difficulty: string, type: string) => {
	var url = '';

	if (category === 'any') {
		url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;
	} else {
		url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
	}

	const data = await (await fetch(url)).json();
	return data.results.map((question: Question) => ({
		...question,
		answers: shuffleArray([ ...question.incorrect_answers, question.correct_answer ])
	}));
};

export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export type QuestionState = Question & { answers: string[] };
