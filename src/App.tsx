import React, { useState } from 'react';
import styles from './App.module.css';
import { Grid, Typography, Button } from '@material-ui/core';
import { CategorySelector } from './components/CategorySelector/CategorySelector';
import { DifficultySelector } from './components/DifficultySelector/DifficultySelector';
import { QuestionSelector } from './components/QuestionSelector/QuestionSelector';
import { fetchApi, QuestionState } from './api';
import { QuestionCard } from './components/QuestionCard/QuestionCard';
import { TypeSelector } from './components/TypeSelector/TypeSelector';

var noOfQuestions = '5';
var categoryValue = 'any';
var difficultyLevel = 'easy';
var type = 'multiple';

type AnswerObject = {
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

export const typeHandler = async (props: string) => {
	type = props;
};

export const questionsHandler = async (props: string) => {
	noOfQuestions = props;
};

export const categoryHandler = async (props: string) => {
	categoryValue = props;
};

export const difficultyHandler = async (props: string) => {
	difficultyLevel = props;
};

function App() {
	const [ loading, setLoading ] = useState(false);
	const [ quizStart, setQuizStart ] = useState(false);
	const [ quizOver, setQuizOver ] = useState(true);
	const [ questions, setQuestions ] = useState<QuestionState[]>([]);
	const [ number, setNumber ] = useState(0);
	const [ userAnswer, setUserAnswer ] = useState<AnswerObject[]>([]);
	const [ score, setScore ] = useState(0);
	const [ press, setPress ] = useState(1);

	const startQuiz = async () => {
		setLoading(true);
		setQuizStart(true);
		const newQuestions = await fetchApi(noOfQuestions, categoryValue, difficultyLevel, type);
		console.log(newQuestions);
		setQuestions(newQuestions);
		setQuizOver(false);
		setLoading(false);
	};

	const nextQuestion = async () => {
		const nextQuestion = number + 1;
		setPress(press + 1);
		if (nextQuestion === Number(noOfQuestions)) {
			setQuizOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};

	const quizStartAgain = async () => {
		setLoading(false);
		setQuizStart(false);
		setQuizOver(true);
		setQuestions([]);
		setNumber(0);
		setUserAnswer([]);
		setScore(0);
	};

	const answerCheck = async (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!quizOver) {
			const answer: string = e.currentTarget.value;

			const correct: boolean = questions[number].correct_answer === answer;

			if (correct) setScore((prev) => prev + 1);

			const answerObject = {
				answer,
				correct,
				correctAnswer: questions[number].correct_answer
			};

			setUserAnswer((prev) => [ ...prev, answerObject ]);
		}
	};

	return (
		<div className={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h1" className={styles.heading}>
						Quiz App
					</Typography>
				</Grid>
				<Grid item xs={12} className={styles.container2}>
					{quizStart ? null : <TypeSelector />}
					{quizStart ? null : <QuestionSelector />}
					{quizStart ? null : <CategorySelector />}
					{quizStart ? null : <DifficultySelector />}
					{!loading && !quizOver ? (
						<QuestionCard
							questionNumber={number + 1}
							totalQuestions={noOfQuestions}
							question={questions[number].question}
							answers={questions[number].answers}
							callback={answerCheck}
							score={score}
							userAnswers={userAnswer[number]}
						/>
					) : null}
					{loading ? <Typography>Loading...</Typography> : null}
					{quizStart ? null : (
						<Button variant="outlined" className={styles.buttons} onClick={startQuiz}>
							Start Quiz
						</Button>
					)}
					{userAnswer.length === Number(noOfQuestions) || press === Number(noOfQuestions) ? (
						<Button onClick={quizStartAgain} variant="outlined">
							Start Quiz Again
						</Button>
					) : null}
					{!loading &&
					quizStart &&
					userAnswer.length !== Number(noOfQuestions) &&
					press !== Number(noOfQuestions) ? (
						<Button variant="outlined" onClick={nextQuestion}>
							Next Question
						</Button>
					) : null}
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
