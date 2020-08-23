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

export const typeHandler = async (props: string) => {
	type = props;
	console.log(type);
};

export const questionsHandler = async (props: string) => {
	noOfQuestions = props;
	console.log(noOfQuestions);
};

export const categoryHandler = async (props: string) => {
	categoryValue = props;
	console.log(categoryValue);
};

export const difficultyHandler = async (props: string) => {
	difficultyLevel = props;
	console.log(difficultyLevel);
};

function App() {
	const [ loading, setLoading ] = useState(false);
	const [ quizStart, setQuizStart ] = useState(false);
	const [ quizOver, setQuizOver ] = useState(false);
	const [ questions, setQuestions ] = useState<QuestionState[]>([]);
	const [ number, setNumber ] = useState(0);

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
		setNumber(number + 1);
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
						/>
					) : null}
					{loading ? <Typography>Loading...</Typography> : null}
					{quizStart ? null : (
						<Button variant="outlined" className={styles.buttons} onClick={startQuiz}>
							Start Quiz
						</Button>
					)}
					{quizOver ? <Button variant="outlined">Start Quiz Again</Button> : null}
					{!loading && quizStart ? (
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
