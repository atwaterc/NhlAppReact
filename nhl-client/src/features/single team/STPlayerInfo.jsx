import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from '../common/Spinner';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';

function STPlayerInfo({ playerId }) {
	const [player, setPlayer] = useState({});
	const [loading, setLoading] = useState(true);

	// get player info
	useEffect(
		() =>
			axios
				.get(`https://statsapi.web.nhl.com/api/v1/people/${playerId}`)
				.then((res) => setPlayer(res.data))
				.catch((err) => console.error(err))
				.finally(() => setLoading(false)),
		[playerId]
	);

	if (loading) return <Spinner />;

	const playerPic = `http://nhl.bamcontent.com/images/headshots/current/168x168/${playerId}.jpg`;
	const p = player.people[0];
	const flag = `https://countryflagsapi.com/svg/${p.birthCountry}`;

	return (
		<Card>
			<CardMedia component='img' alt='player' image={playerPic} />
			<CardContent>
				<Typography
					gutterBottom
					variant='h6'
					component='div'
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}>
					{p.fullName} &nbsp; #{p.primaryNumber}
					<Box
						component='img'
						src={flag}
						sx={{
							height: 25,
							width: 'auto',
						}}
					/>
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'
					sx={{ textAlign: 'center' }}>
					{p.height} | {p.weight} lb | {p.currentAge}&nbsp;&nbsp;•&nbsp;&nbsp;
					{p.primaryPosition.type} | {p.primaryPosition.abbreviation}
				</Typography>
				<Typography
					variant='body1'
					color='text.secondary'
					sx={{ textAlign: 'left' }}>
					Born: {p.birthDate}
					<br />
					Birthplace: {p.birthCity},{' '}
					{p.birthStateProvince ? p.birthStateProvince : p.birthCountry}
					<br />
					Shoots: {p.shootsCatches}
					<br />
				</Typography>
			</CardContent>
		</Card>
	);
}

export default STPlayerInfo;
