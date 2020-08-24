import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent, Button } from '@material-ui/core';
import { categoryHandler } from '../../App';
import styles from './CategorySelector.module.css';

export const CategorySelector = () => {
	const categoryList = [
		{ id: 'any', name: 'Any', img: require('../../images/any.gif') },
		{ id: '9', name: 'General Knowledge', img: require('../../images/generalKnowledge.png') },
		{ id: '10', name: 'Entertainment Books', img: require('../../images/books.png') },
		{ id: '11', name: 'Entertainment - Film', img: require('../../images/computer.png') },
		{ id: '12', name: 'Entertainment - Music', img: require('../../images/music.png') },
		{ id: '13', name: 'Entertainment - Musicals & Theaters', img: require('../../images/theater.png') },
		{ id: '14', name: 'Entertainment - Televison', img: require('../../images/television.png') },
		{ id: '15', name: 'Entertainment - Video Games', img: require('../../images/videoGames.png') },
		{ id: '16', name: 'Entertainment - Board Games', img: require('../../images/boardGames.png') },
		{ id: '17', name: 'Science & Nature', img: require('../../images/scienceNature.png') },
		{ id: '18', name: 'Science - Computers', img: require('../../images/computer.png') },
		{ id: '19', name: 'Science - Mathematics', img: require('../../images/mathematics.png') },
		{ id: '20', name: 'Mythology', img: require('../../images/mythology.png') },
		{ id: '21', name: 'Sports', img: require('../../images/sports.png') },
		{ id: '22', name: 'Geography', img: require('../../images/geography.png') },
		{ id: '23', name: 'History', img: require('../../images/history.png') },
		{ id: '24', name: 'Politics', img: require('../../images/politics.png') },
		{
			id: '25',
			name: 'Art',
			img: require('../../images/art.png')
		},
		{ id: '26', name: 'Celebrities', img: require('../../images/celebrities.png') },
		{ id: '27', name: 'Animals', img: require('../../images/animals.png') },
		{ id: '28', name: 'Vehicles', img: require('../../images/vehicles.png') },
		{ id: '29', name: 'Entertainment - Comics', img: require('../../images/comics.png') },
		{ id: '30', name: 'Science - Gadgets', img: require('../../images/gadgets.png') },
		{ id: '31', name: 'Entertainment - Japanese Anime & Manga', img: require('../../images/japaneeseAnime.png') },
		{ id: '32', name: 'Enertainment - Cartoon & Animations', img: require('../../images/cartoon.gif') }
	];

	const [ categoryValue, setCategoryValue ] = useState('any');

	categoryHandler(categoryValue);

	return (
		<div className={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h4" className={styles.text}>
						Select Your Category
					</Typography>
				</Grid>
				{categoryList.map(({ id, name, img }) => (
					<Grid item xs={6} md={3} key={id}>
						<Button onClick={(e) => setCategoryValue(id)}>
							<Card>
								<CardContent>
									<img src={img} alt={name} className={styles.images} />
									<Typography>{name}</Typography>
								</CardContent>
							</Card>
						</Button>
					</Grid>
				))}
			</Grid>
		</div>
	);
};
