import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from '../common/Spinner';


function STNextGameComp() {
    const params = useParams();
    const [nextGame, setNextGame] = useState({});
    const [loading, setLoading] = useState(true);

    // get next game info
    useEffect(() => (
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${params.teamId}?expand=team.schedule.next`)
        .then(res => setNextGame(res.data))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    ), [params.teamId]) 

    let opponentId;
    let vsStatus;

    if (loading) 
        return ( <Spinner /> )

    const teamGameData = nextGame.teams[0].nextGameSchedule.dates[0].games[0].teams;
    const gameDate = nextGame.teams[0].nextGameSchedule.dates[0].games[0].gameDate;

    var newDate = new Date(gameDate);
    let formattedDate = newDate.toLocaleDateString('en-US');

    // determine vs or @
    console.log('T OR F ', typeof params.teamId, typeof teamGameData.home.team.id)
    if (params.teamId !== teamGameData.home.team.id.toString()){
        opponentId = teamGameData.home.team.id
        vsStatus = '@';
    } else {
        opponentId = teamGameData.away.team.id
        vsStatus = 'vs.'
    }

    let opponentLogo = `http://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${opponentId}.svg`;
    
     return (
        <Box component='div' sx={{textAlign: 'center'}}>
            <Typography sx={{fontSize: 30}}>
                Next Game {formattedDate} {vsStatus}
            </Typography>
            <Box
                component="img"
                sx={{
                    height: 90,
                    width: 'auto',
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt=''
                src={opponentLogo}
            />
        </Box>
    )
}

export default STNextGameComp
