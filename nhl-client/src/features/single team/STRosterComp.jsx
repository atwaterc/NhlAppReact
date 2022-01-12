import { TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Table } from '@mui/material';
import React from 'react';

function STRosterComp({ roster }) {
    console.log('STRosterComp ', roster)
    return (
        <TableContainer component={Paper} sx={{ mt: 3, mb: 3 }}>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">#</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Pos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {roster.roster.map((r) => (
                        <React.Fragment key={r.person.link}>
                            <TableRow hover={true} key={r.person.id}>
                                <TableCell align="left" key={r.jerseyNumber}>{r.jerseyNumber}</TableCell>
                                <TableCell align="left" key={r.person.fullName}>{r.person.fullName}</TableCell>
                                <TableCell align="left" key={r.position.abbreviation}>{r.position.abbreviation}</TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default STRosterComp
