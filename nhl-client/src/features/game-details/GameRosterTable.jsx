import { TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Table } from '@mui/material';
import GamePlayerCell from './GamePlayerCell';

function GameRosterTable({ players, id }) {
    console.log('inside roster table ', players)
    return (
        <TableContainer id={id} component={Paper} sx={{ mt: 3 }}>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">POS</TableCell>
                        <TableCell align="center">G</TableCell>
                        <TableCell align="center">A</TableCell>
                        <TableCell align="center">P</TableCell>
                        <TableCell align="center">+/-</TableCell>
                        <TableCell align="center">SOG</TableCell>
                        <TableCell align="center">TOI</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {players.map((player) => (
                        <GamePlayerCell key={player.person.id} player={player} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default GameRosterTable
