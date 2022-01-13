import { Grid, Paper, styled, Box, Typography } from '@mui/material'
import axios from 'axios';
import Spinner from '../common/Spinner';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import STRecordsComp from './STRecordsComp';
import STNextGameComp from './STNextGameComp';
import STPrevGameComp from './STPrevGameComp';
import STRosterComp from './STRosterComp';
import STPlayerInfo from './STPlayerInfo';

// interface TeamInfo {
//     rink: string,
//     city: string,
//     establishedYear: string,
//     location: string,
//     division: string,
//     conference: string
// }

function SingleTeamInfoPage() {
    const params = useParams();
    const { state } = useLocation();
    
    const [team, setTeam] = useState({});

    useEffect(() => (
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${params.teamId}`)
        .then(res => setTeam(res.data))
        .catch(err => console.error(err))
    ), [params.teamId]);

    // assign team logo
    let logoUrl = `http://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${params.teamId}.svg`;

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' spacing={1} columns={16}>
            <Grid item sm={16}>
                {team.teams && <Typography variant='h5' sx={{textAlign: 'center', color: 'gray'}}>
                {team.teams[0].name}  •  {state.streak}  •  {team.teams[0].venue.name}  •  est {team.teams[0].firstYearOfPlay}  •  {team.teams[0].conference.name}  •  {team.teams[0].division.name}
                </Typography>}
            </Grid>
            <Grid item sm={7}>
                <Box
                    component="img"
                    sx={{
                    height: 'auto'
                    }}
                    alt=''
                    src={logoUrl}
                />
            </Grid>
            <Grid item sm={9} sx={{border: (theme) => `1px solid gray`, borderRadius: 10}}>
                <STNextGameComp/>
                <STPrevGameComp/>
            </Grid>
            <Grid item sm={16}>
                <STRecordsComp/>
            </Grid>
            <Grid item sm={8}>
               <STRosterComp/>
            </Grid>
            <Grid item sm={1}>
                
            </Grid>
            <Grid item sm={6}>
            <STPlayerInfo />
            </Grid>
        </Grid>
    )
}

export default SingleTeamInfoPage
