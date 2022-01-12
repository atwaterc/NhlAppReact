import { Grid, Paper, styled, Box, Typography } from '@mui/material'
import axios from 'axios';
import Spinner from '../common/Spinner';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
    const path = `https://statsapi.web.nhl.com/api/v1/teams/${params.teamId}`;

    const [team, setTeam] = useState({});
    const [nextGame, setNextGame] = useState({});
    const [prevGame, setPrevGame] = useState({});
    const [roster, setRoster] = useState({});
    const [loading, setLoading] = useState(true);

    // attempt 3 axios calls
    useEffect(() => {
        document.title = 'NHL | Team Info';
        const getData = async () => {
            try {
                const teamData = await axios.get(path + '/stats');
                setTeam(teamData.data);

                const nextGameData = await axios.get(path + '?expand=team.schedule.next');
                setNextGame(nextGameData.data);
               
                const prevGameData = await axios.get(path + '?expand=team.schedule.previous');
                setPrevGame(prevGameData.data);

                const rosterData = await axios.get(path + '/roster');
                setRoster(rosterData.data);

                 setLoading(false);
            } catch (err) {
                console.log(err);
            }

        }
        getData();
        
        return () => {
            setTeam({});
            setNextGame({});
            setPrevGame({});
            setRoster({});
        }
    }, [])

    if (loading || team === undefined || team === null 
        || nextGame === undefined || nextGame === null 
        || prevGame === undefined || prevGame === null
        || roster === undefined || roster === null) 
        return ( <Spinner /> )

    // assign team logo
    let logoUrl = `http://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${params.teamId}.svg`;
    let teamInformation = nextGame.teams[0];

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' spacing={1} columns={16}>
        <Grid item sm={16}>
            <Typography variant='h5' sx={{textAlign: 'center', color: 'gray'}}>
            {teamInformation.name}  •  {teamInformation.venue.name}  •  est {teamInformation.firstYearOfPlay}  •  {teamInformation.conference.name}  •  {teamInformation.division.name}
            </Typography>
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
           <STNextGameComp nextGame={nextGame}/>
           <STPrevGameComp prevGame={prevGame}/>
        </Grid>
        <Grid item sm={16}>
            <STRecordsComp stats={team && team.stats[0]} rankings={team && team.stats[1]}/>
        </Grid>
        <Grid item sm={8}>
            <STRosterComp roster={roster}/>
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
