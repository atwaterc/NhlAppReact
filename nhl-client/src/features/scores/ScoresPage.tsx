import { Container, Typography } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from '../common/Spinner';
import ScoresBox from './ScoresBox';

export default function ScoresPage() {
    const [loading, setLoading] = useState(true);
    const [scores, setScores] = useState<any>({});

    useEffect(() => {
        document.title = 'NHL | Scores';
        axios.get('https://statsapi.web.nhl.com/api/v1/schedule')
            .then(res => setScores(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [])

    if (loading) return (
        <Spinner />
    )

    if (scores === null || scores === undefined) 
        return (
            <Typography variant="h5" align="center">No Games Scheduled Today</Typography>
        )

    return (
        <Container id="scoresContainer">
            { scores.dates[0].games.map((game: any) => (
                <ScoresBox key={game.gamePk}  game={game}/>
            ))}
        </Container>
    )
}