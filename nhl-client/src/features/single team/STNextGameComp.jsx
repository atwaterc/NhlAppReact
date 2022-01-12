import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

function STNextGameComp({ nextGame }) {
    const params = useParams();

    let opponentId;
    let vsStatus;

    console.log('STNextGameComp ', nextGame.teams[0].nextGameSchedule.dates[0].games[0].teams);

    const teamGameData = nextGame.teams[0].nextGameSchedule.dates[0].games[0].teams;
    const gameDate = nextGame.teams[0].nextGameSchedule.dates[0].games[0].gameDate;

    var newDate = new Date(gameDate);
    let formattedDate = newDate.toLocaleDateString('en-US');

    // determine vs or @
    if (params.teamId !== teamGameData.home.team.id){
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
