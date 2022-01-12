import { Box, Button, Card, CardContent, Grid, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
    teams: any;
    venue: any;
    gameId: any;
    status: any;
}

export default function ScoresData({ teams, venue, gameId, status }: Props) {
    let hLogoUrl = `http://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teams.home.team.id}.svg`;
    let aLogoUrl = `http://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teams.away.team.id}.svg`;
    let ahid = teams.away.team.id + teams.home.team.id;
    let  winningTeam = 'false';

    if (teams.away.score + teams.home.score !== 0){
        winningTeam = teams.away.score > teams.home.score ? 'away' : 'home';
    }


    return (
        <Card id={"gameCard" + ahid} sx={{backgroundColor: '#D3D3D3', color: 'black' }}>
            <CardContent id={"gameContent" + ahid}>
                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} id={"venue" + venue.id} variant="h5" align="center" mb={3}>
                    {venue.name} • {status.detailedState}
                </Typography>
                {/* AWAY TEAM */}
                <Grid id={"awayGrid" + ahid} container alignItems="center" justifyContent="center">
                    <Grid item xs={5}>
                            <Box
                                component="img"
                                sx={{
                                height: 30,
                                width: 'auto',
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                                }}
                                alt={teams.away.team.name}
                                src={aLogoUrl}
                            />
                        <Typography display="" gutterBottom component="span" variant="h6">
                            {teams.away.team.name}
                        </Typography>
                        <br/>
                        <Typography sx={{}} pl={8} component="span" variant="caption">
                                {teams.away.leagueRecord.wins} - {teams.away.leagueRecord.losses} - {teams.away.leagueRecord.ot}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} pl={5}>
                        <Typography component="span" variant="h3" className={`${winningTeam === 'away' ? 'winning-team' : 'losing-team'}`}>
                            {teams.away.score}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button component={Link} to={`game/${gameId}/boxscore`} variant="contained">Boxscore</Button>
                    </Grid>
                </Grid> 
                <Divider sx={{mb: 2}}/>
                {/* HOME TEAM */}
                <Grid id={"homeGrid" + ahid} container alignItems="center" justifyContent="center">
                    <Grid item xs={5}>
                            <Box
                                component="img"
                                sx={{
                                height: 30,
                                width: 'auto',
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                                }}
                                alt={teams.home.team.name}
                                src={hLogoUrl}
                            />
                        <Typography display="" gutterBottom component="span" variant="h6">
                            {teams.home.team.name}
                        </Typography>
                        <br />
                        <Typography sx={{}} pl={8} component="span" variant="caption">
                                {teams.home.leagueRecord.wins} - {teams.home.leagueRecord.losses} - {teams.home.leagueRecord.ot}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} pl={5}>
                        <Typography component="span" variant="h3" className={`${winningTeam === 'home' ? 'winning-team' : 'losing-team'}`}>
                            {teams.home.score}
                        </Typography>
                    </Grid>
                </Grid> 
            </CardContent>
        </Card>
    )
}