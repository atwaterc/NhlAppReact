import axios from 'axios';
import Spinner from '../common/Spinner';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Grid, Box, Typography } from '@mui/material';

function STPrevGameComp() {
    const params = useParams();
    const [prevGame, setPrevGame] = useState({});
    const [loading, setLoading] = useState(true);
    
    // get previous game info
    useEffect(() => (
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${params.teamId}?expand=team.schedule.previous`)
        .then(res => setPrevGame(res.data))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    ), [params.teamId]) 

    if (loading) 
        return ( <Spinner /> )
    console.log(prevGame);
    const teamGameData = prevGame.teams[0].previousGameSchedule.dates[0].games[0].teams;

    let hLogoUrl = `http://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamGameData.home.team.id}.svg`;
    let aLogoUrl = `http://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamGameData.away.team.id}.svg`;

    return (
        <>
         <Typography sx={{fontSize: 20, textAlign: 'center', mt: 5}}>
                Previous Game
        </Typography>
        <Grid item sm={18} sx={{ display: 'flex', mt: 1, alignItems: 'center', 
        justifyContent: 'center', direction: 'row'}}> 
            <span style={{ display: 'flex'}}>
                <Box
                    component="img"
                    sx={{
                        height: 50,
                        width: 'auto',
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                        margin: 'auto'
                    }}
                    alt=''
                    src={hLogoUrl}
                />
                <Typography variant='h3' sx={{ml: 1}}>
                    {teamGameData.home.score}
                </Typography>
            </span>
                <Typography variant='h3'>
                    &nbsp;&nbsp;-&nbsp;&nbsp;
                </Typography>
            <span style={{ display: 'flex'}}>
                <Typography variant='h3'>
                    {teamGameData.away.score}
                </Typography>
                <Box
                    component="img"
                    sx={{
                        height: 50,
                        width: 'auto',
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                        margin: 'auto'
                    }}
                    alt=''
                    src={aLogoUrl}
                />
            </span>
        </Grid>
        </>
    )
}

export default STPrevGameComp
