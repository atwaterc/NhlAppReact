import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from '../common/Spinner';
import { useParams } from 'react-router-dom';

import { TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Table } from '@mui/material';

function STRosterComp() {

    const params = useParams();
    const [roster, setRoster] = useState({});
    const [loading, setLoading] = useState(true);

    // get team roster for year
    useEffect(() => (
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${params.teamId}/roster`)
        .then(res => setRoster(res.data))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    ), [params.teamId])

    if (loading) 
        return ( <Spinner /> )
        
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
