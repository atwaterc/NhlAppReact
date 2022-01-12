import { Card, CardContent, CardMedia, Grid, Box, Typography } from '@mui/material';
import GameRosterTable from './GameRosterTable';
import GameTeamStats from './GameTeamStats';

function GameTeamTable({ team, tType }) {
   // console.log('inside GameTeamTable ', team)
    const logoUrl = `http://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.team.id}.svg`;
    const stats = team.teamStats.teamSkaterStats;
    const players = team.players;
    const teamList = [];

    // Object.values(players).map(player => 
    //     player.stats.skaterStats === undefined ? console.log('hi') :console.log('bye')
    // )

    Object.values(players)
        .filter(player => player.stats.skaterStats !== undefined)
        .map(player => teamList.push(player))

    const ppPercentage = parseFloat(stats.powerPlayPercentage).toFixed(1);
    const foPercentage = parseFloat(stats.faceOffWinPercentage).toFixed(1);

    teamList.map(p => console.log(p))
    
    function AwayTeam() {
        return (
            <Grid item sm={8}>
                <Typography component='div' variant='h6' sx={{textAlign: 'center'}}>
                    {team.team.name} (A)
                </Typography>
                <Card sx={{ backgroundColor: 'gray', display:'flex', height: 300, 
                justifyContent:'space-around', alignItems:'stretch'}}>
                    <img className="boxscore-logo" src={logoUrl} alt={team.team.name}/>
                    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', minWidth: 200}}>
                        <CardContent sx={{ flex: '1 0 auto', backgroundColor: 'rgba(0,0,0,0.6)'}}>
                            <GameTeamStats stat={stats.shots} statType='Shots'/>
                            <GameTeamStats stat={stats.pim} statType='PIM'/>
                            <GameTeamStats stat={stats.powerPlayGoals} statType='PP Goals'/>
                            <GameTeamStats stat={ppPercentage} statType='PP %'/>
                            <GameTeamStats stat={stats.powerPlayOpportunities} statType='PP Opp'/>
                            <GameTeamStats stat={foPercentage} statType='FO %'/>
                            <GameTeamStats stat={stats.blocked} statType='Blocks'/>
                            <GameTeamStats stat={stats.takeaways} statType='Takeaways'/>
                            <GameTeamStats stat={stats.giveaways} statType='Giveaways'/>
                        </CardContent>
                    </Box>
                </Card>
                <GameRosterTable players={teamList} id='311away'/>
            </Grid>
        );
    }

    function HomeTeam() {
        return(
            <Grid item sm={8}>
                 <Typography component='div' variant='h6' sx={{textAlign: 'center'}}>
                    {team.team.name} (H)
                </Typography>
                <Card sx={{ backgroundColor: 'gray', display:'flex', height: 300, 
                justifyContent:'space-around', alignItems:'stretch'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', minWidth: 200}}>
                        <CardContent sx={{ flex: '1 0 auto', backgroundColor: 'rgba(0,0,0)'}}>
                            <GameTeamStats stat={stats.shots} statType='Shots'/>
                            <GameTeamStats stat={stats.pim} statType='PIM'/>
                            <GameTeamStats stat={stats.powerPlayGoals} statType='PP Goals'/>
                            <GameTeamStats stat={ppPercentage} statType='PP %'/>
                            <GameTeamStats stat={stats.powerPlayOpportunities} statType='PP Opp'/>
                            <GameTeamStats stat={foPercentage} statType='FO %'/>
                            <GameTeamStats stat={stats.blocked} statType='Blocks'/>
                            <GameTeamStats stat={stats.takeaways} statType='Takeaways'/>
                            <GameTeamStats stat={stats.giveaways} statType='Giveaways'/>
                        </CardContent>
                    </Box>
                    <img className="boxscore-logo" src={logoUrl} alt={team.team.name}/>                    
                </Card>
                <GameRosterTable players={teamList} id='311home'/>
            </Grid>
        )
    }
    return (
       <>
        {tType === 'away' ? AwayTeam() : HomeTeam()}
       </>
    )
}

export default GameTeamTable
