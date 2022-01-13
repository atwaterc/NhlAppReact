import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from '../common/Spinner';
import { useParams } from 'react-router-dom';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'

function STRecordsComp() {
    const params = useParams();
    const [team, setTeam] = useState({});
    const [loading, setLoading] = useState(true);

    const useStyles = makeStyles({
        tableCell: {
            fontSize: 13
        }
    });

    const classes = useStyles()

    // get team stats for year, W, L, OT, PP% etc.
    useEffect(() => (
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${params.teamId}/stats`)
        .then(res => setTeam(res.data))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    ), [params.teamId])

    if (loading) 
        return ( <Spinner /> )

    const ts = team.stats[0].splits[0].stat;
    const tr = team.stats[1].splits[0].stat;

    return (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell align='center' className={classes.tableCell}>GP</TableCell>
                        <TableCell align='center' className={classes.tableCell}>W</TableCell>
                        <TableCell align='center' className={classes.tableCell}>L</TableCell>
                        <TableCell align='center' className={classes.tableCell}>OT</TableCell>
                        <TableCell align='center' className={classes.tableCell}>P</TableCell>
                        <TableCell align='center' className={classes.tableCell}>P%</TableCell>
                        <TableCell align='center' className={classes.tableCell}>GF/G</TableCell>
                        <TableCell align='center' className={classes.tableCell}>GA/G</TableCell>
                        <TableCell align='center' className={classes.tableCell}>PP%</TableCell>
                        <TableCell align='center' className={classes.tableCell}>PPG</TableCell>
                        <TableCell align='center' className={classes.tableCell}>PK%</TableCell>
                        <TableCell align='center' className={classes.tableCell}>S/G</TableCell>
                        <TableCell align='center' className={classes.tableCell}>SA/G</TableCell>
                        <TableCell align='center' className={classes.tableCell}>FOW%</TableCell>
                        <TableCell align='center' className={classes.tableCell}>S%</TableCell>
                        <TableCell align='center' className={classes.tableCell}>SV%</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{backgroundColor: '#303030'}}>
                        <TableCell align='center' className={classes.tableCell}>{ts.gamesPlayed}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{ts.wins}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{ts.losses}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{ts.ot}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{ts.pts}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{ts.ptPctg}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{(ts.goalsPerGame).toFixed(2)}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{(ts.goalsAgainstPerGame).toFixed(2)}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{ts.powerPlayPercentage}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{ts.powerPlayGoals}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{ts.penaltyKillPercentage}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{(ts.shotsPerGame).toFixed(1)}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{(ts.shotsAllowed).toFixed(1)}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{ts.faceOffWinPercentage}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{ts.shootingPctg}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{ts.savePctg}</TableCell>
                    </TableRow>
                    <TableRow sx={{backgroundColor: '#303030'}}>
                        <TableCell align='center' className={classes.tableCell}>{tr.gamesPlayed}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.wins}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.losses}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.ot}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.pts}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.ptPctg}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.goalsPerGame}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.goalsAgainstPerGame}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.powerPlayPercentage}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.powerPlayGoals}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.penaltyKillPercentage}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.shotsPerGame}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.shotsAllowed}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.faceOffWinPercentage}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.shootingPctRank}</TableCell>
                        <TableCell align='center' className={classes.tableCell}>{tr.savePctRank}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default STRecordsComp
