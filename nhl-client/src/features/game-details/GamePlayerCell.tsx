import { TableCell, TableRow, Divider } from '@mui/material';

function GamePlayerCell({ player }: any) {
    const playerNameLength = player.person.fullName.length;
    const points = player.stats.skaterStats.goals + player.stats.skaterStats.assists;

    return (
        <TableRow id={player.person.id}>
            <TableCell component="th" scope="row" align="center">{player.jerseyNumber}</TableCell>
            <TableCell component="th" scope="row" align="left" sx={{fontSize: playerNameLength > 17 ? 10 : 13}}>{player.person.fullName}</TableCell>
            <TableCell component="th" scope="row" align="center">{player.position.abbreviation}</TableCell>
            <TableCell component="th" scope="row" align="center">{player.stats.skaterStats.goals}</TableCell>
            <TableCell component="th" scope="row" align="center">{player.stats.skaterStats.assists}</TableCell>
            <TableCell component="th" scope="row" align="center">{points}</TableCell>
            <TableCell component="th" scope="row" align="center">{player.stats.skaterStats.plusMinus}</TableCell>
            <TableCell component="th" scope="row" align="center">{player.stats.skaterStats.shots}</TableCell>
            <TableCell component="th" scope="row" align="center">{player.stats.skaterStats.timeOnIce}</TableCell>
        </TableRow>
    )
}

export default GamePlayerCell
