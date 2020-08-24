import React from 'react';
import styles from './QuestionCard.module.css';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';

type Props = {
	questionNumber: number;
	totalQuestions: string;
	question: string;
	answers: string[];
	callback: any;
	score: number;
	userAnswers: any;
};

export const QuestionCard: React.FC<Props> = ({
	questionNumber,
	totalQuestions,
	question,
	answers,
	callback,
	score,
	userAnswers
}) => {
	return (
		<div className={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h4">
						Score: {score} / {questionNumber}
					</Typography>
					<Typography variant="h5">
						Question Number: {questionNumber} / {totalQuestions}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Typography>{question}</Typography>
							{answers.map((answer: string) => (
								<Button disabled={userAnswers} onClick={callback} value={answer} variant="outlined">
									{answer}
								</Button>
							))}
							{userAnswers ? (
								<Typography className={userAnswers.correct ? styles.true : styles.false}>
									Your answer is {userAnswers.correct ? 'Correct' : 'Wrong'}
								</Typography>
							) : null}
							{userAnswers ? userAnswers.correct ? null : (
								<Typography className={styles.false}>
									The correct answer was {userAnswers.correctAnswer}
								</Typography>
							) : null}
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};
