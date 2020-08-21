import React, { useState } from 'react';
import styles from './App.module.css';
import { Grid, Typography, Button } from '@material-ui/core';
import { CategorySelector } from './components/CategorySelector/CategorySelector';
import { DifficultySelector } from './components/DifficultySelector/DifficultySelector';

var categoryValue = 'any';
var difficultyLevel = 'easy';

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
	const [ quizNotEnd, setQuizNotEnd ] = useState(false);
	const [ quizOver, setQuizOver ] = useState(false);

	const startQuiz = async () => {
		setLoading(true);
		setLoading(false);
		setQuizStart(true);
		setQuizOver(false);
		setQuizNotEnd(true);
	};

	return (
		<div className={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12} className={styles.container2}>
					<Typography variant="h1">Quiz App</Typography>
					{quizStart ? null : <CategorySelector />}
					{quizStart ? null : <DifficultySelector />}
					{loading ? <Typography>Loading...</Typography> : null}
					{quizStart ? null : (
						<Button variant="outlined" className={styles.buttons} onClick={startQuiz}>
							Start Quiz
						</Button>
					)}
					{quizOver ? <Button variant="outlined">Start Quiz Again</Button> : null}
					{!loading && quizNotEnd ? <Button variant="outlined">Next Question</Button> : null}
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
