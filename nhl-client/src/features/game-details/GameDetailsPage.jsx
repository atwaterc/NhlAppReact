import { useState, useEffect } from 'react';
import  axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../common/Spinner';
import { Grid } from '@mui/material';
import GameTeamTable from './GameTeamTable';

export default function GameDetailsPage() {
    const params = useParams();
    
    const [loading, setLoading] = useState(true);
    const [game, setGame] = useState({});

    useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/game/${params.gameId}/boxscore`)
        // axios.get(`https://statsapi.web.nhl.com/api/v1/game/2020020004/boxscore`)
        .then(res => setGame(res.data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }, [params.id])

    if (loading) return (
        <Spinner />
    )
    
        return (
            <Grid container spacing={2} columns={16} id='boxscoreGrid' direction='row'
             justifyContent='space-between' alignItems='center' mb={5}>
                <GameTeamTable team={game.teams && game.teams.away} tType='away' />
                <GameTeamTable team={game.teams && game.teams.home} tType='home' />
            </Grid>  
        )
}