import { Typography, Divider } from '@mui/material';

function GameTeamStats({statType, stat}) {
    return (
        <Typography component='div' variant='subtitle' color="text.secondary">
            {statType}: <span style={{ 'float': 'right'}}>&nbsp;{stat}</span>
            <Divider />
        </Typography>
    )
}

export default GameTeamStats
