import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { categoryHandler } from '../../App';
import styles from './CategorySelector.module.css';

// Import Images
//import cartoon from '../../images/cartoon.gif';

export const CategorySelector = () => {
	const categoryList = [
		{ id: 'any', name: 'Any', img: '' },
		{ id: '9', name: 'General Knowledge', img: '' },
		{ id: '10', name: 'Entertainment Books', img: '' },
		{ id: '11', name: 'Entertainment - Film', img: '' },
		{ id: '12', name: 'Entertainment - Music', img: '' },
		{ id: '13', name: 'Entertainment - Musicals & Theaters', img: '' },
		{ id: '14', name: 'Entertainment - Televison', img: '' },
		{ id: '15', name: 'Entertainment - Video Games', img: '' },
		{ id: '16', name: 'Entertainment - Board Games', img: '' },
		{ id: '17', name: 'Science & Nature', img: '' },
		{ id: '18', name: 'Science - Computers', img: '' },
		{ id: '19', name: 'Science - Mathematics', img: '' },
		{ id: '20', name: 'Mythology', img: '' },
		{ id: '21', name: 'Sports', img: '' },
		{ id: '22', name: 'Geography', img: '' },
		{ id: '23', name: 'History', img: '' },
		{ id: '24', name: 'Politics', img: '' },
		{ id: '25', name: 'Art', img: '' },
		{ id: '26', name: 'Celebrities', img: '' },
		{ id: '27', name: 'Animals', img: '' },
		{ id: '28', name: 'Vehicles', img: '' },
		{ id: '29', name: 'Entertainment - Comics', img: '' },
		{ id: '30', name: 'Science - Gadgets', img: '' },
		{ id: '32', name: 'Enertainment - Cartoon & Animations', img: '' }
	];

	type image = {
		src: any;
	};

	const [ categoryValue, setCategoryValue ] = useState('any');

	categoryHandler(categoryValue);

	return (
		<div className={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h4" className={styles.heading}>
						Select Your Category
					</Typography>
				</Grid>
				{categoryList.map(({ id, name, img }) => (
					<Grid item xs={4} md={3} key={id}>
						<Card onClick={(e) => setCategoryValue(id)}>
							<CardContent>
								<img src={img} alt={name} className={styles.images} />
								<Typography>{name}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};
