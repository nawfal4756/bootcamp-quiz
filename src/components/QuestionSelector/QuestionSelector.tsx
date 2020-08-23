import React, { useState } from 'react';
import { Grid, Typography, Slider } from '@material-ui/core';
import { questionsHandler } from '../../App';
import styles from './QuestionSelector.module.css';

export const QuestionSelector = () => {
	// const values = [
	// 	{ id: '0', name: '0' },
	// 	{ id: '1', name: '1' },
	// 	{ id: '2', name: '2' },
	// 	{ id: '3', name: '3' },
	// 	{ id: '4', name: '4' },
	// 	{ id: '5', name: '5' },
	// 	{ id: '6', name: '6' },
	// 	{ id: '7', name: '7' },
	// 	{ id: '8', name: '8' },
	// 	{ id: '9', name: '9' },
	// 	{ id: '10', name: '10' },
	// 	{ id: '11', name: '11' },
	// 	{ id: '12', name: '12' },
	// 	{ id: '13', name: '13' },
	// 	{ id: '14', name: '14' },
	// 	{ id: '15', name: '15' },
	// 	{ id: '16', name: '16' },
	// 	{ id: '17', name: '17' },
	// 	{ id: '18', name: '18' },
	// 	{ id: '19', name: '19' },
	// 	{ id: '20', name: '20' },
	// 	{ id: '21', name: '21' },
	// 	{ id: '22', name: '22' },
	// 	{ id: '23', name: '23' },
	// 	{ id: '24', name: '24' },
	// 	{ id: '25', name: '25' }
	// ];

	const [ questions, setQuestions ] = useState(5);

	const handleChange = (e: any, newValue: any) => {
		setQuestions(newValue);
		console.log(questions);
		questionsHandler(String(questions));
	};

	return (
		<div className={styles.container}>
			<Grid container spacing={2} justify="center">
				<Grid item xs={12}>
					<Typography variant="h4" className={styles.text}>
						Select No. of Questions
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={styles.text}>Kindly click your desired option twice</Typography>
					<Slider
						defaultValue={5}
						marks
						step={1}
						min={5}
						max={25}
						valueLabelDisplay="auto"
						onChangeCommitted={handleChange}
					/>
				</Grid>
			</Grid>
		</div>
	);
};
