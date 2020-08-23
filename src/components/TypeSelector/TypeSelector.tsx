import React, { useState } from 'react';
import styles from './TypeSelector.module.css';
import { Grid, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { typeHandler } from '../../App';

export const TypeSelector = () => {
	const [ type, setType ] = useState('multiple');

	typeHandler(type);

	return (
		<div className={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h4" className={styles.text}>
						Select Type of Questions
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<FormControl component="fieldset">
						<RadioGroup
							row
							aria-label="questionType"
							name="questionType"
							value={type}
							onChange={(e) => setType(e.target.value)}
						>
							<FormControlLabel value="multiple" control={<Radio />} label="Multiple Type Question" />
							<FormControlLabel value="boolean" control={<Radio />} label="True False Question" />
						</RadioGroup>
					</FormControl>
				</Grid>
			</Grid>
		</div>
	);
};
