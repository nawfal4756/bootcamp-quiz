import React from 'react';
import styles from './QuestionCard.module.css';
import { Grid } from '@material-ui/core';

type props = {
	questionNumber: number;
	totalQuestions: string;
	question: string;
	answers: string[];
};

export const QuestionCard: React.FC<props> = (questionNumber, totalQuestions) => {
	return (
		<div className={styles.container}>
			<Grid>
				<img />
			</Grid>
		</div>
	);
};
