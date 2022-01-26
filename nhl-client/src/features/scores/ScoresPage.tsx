import { Container, Typography } from '@mui/material';
import { useEffect, useContext } from 'react';
import { getScores } from '../../context/NhlActions';
import NhlContext from '../../context/NhlContext';
import Spinner from '../common/Spinner';
import ScoresBox from './ScoresBox';

export default function ScoresPage() {
	const { scores, loading, dispatch } = useContext(NhlContext);

	useEffect(() => {
		dispatch({ type: 'SET_LOADING' });
		document.title = 'NHL | Scores';

		const getScoresData = async () => {
			const scoresData = await getScores();
			console.log('scorespage ', scoresData);
			dispatch({ type: 'GET_SCORES', payload: scoresData });
		};

		getScoresData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <Spinner />;

	if (scores === null || scores === undefined)
		return (
			<Typography variant='h5' align='center'>
				No Games Scheduled Today
			</Typography>
		);

	return (
		<Container id='scoresContainer'>
			{scores.map((game: any) => (
				<ScoresBox key={game.gamePk} game={game} />
			))}
		</Container>
	);
}
