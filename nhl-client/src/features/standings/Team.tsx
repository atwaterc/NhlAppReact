import { Box, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './standings.css';

//const dataRows: { id: any; name: any; gamesPlayed: any; wins: any; losses: any; ot: any; ptsPer: any; rw: any; row: any; gf: any; ga: any; streak: any; }[] = [];

const cellStyle = {
	color: 'black',
};

const ptsCol = {
	backgroundColor: '#cce4ed !important',
};

const rowStyle = {
	backgroundColor: 'white',
	'&:hover': {
		backgroundColor: '#add8e6 !important',
	},
};

interface Props {
	team: any;
}

// function createData(id: any, name: any, gamesPlayed: any, wins: any, losses: any,
//     ot: any, pts: any, ptsPer: any, rw: any, row: any, gf: any, ga: any, diff: any, streak: any) {
//     return {id, name, gamesPlayed, wins, losses, ot, pts, ptsPer, rw, row, gf, ga, streak};
// }

// const HandleCellClick = (e: any) => {
//     const navigate = useNavigate()
//     console.log('clicked', e.target.id);
//     navigate(`/team/${e.target.id}`)
// }

export default function Team({ team }: Props) {
	const goalDiff = team.goalsScored - team.goalsAgainst;
	const LOGO_URL = process.env.REACT_APP_TEAM_LOGO_URL;
	const navigate = useNavigate();

	const logoUrl = `${LOGO_URL}/${team.team.id}.svg`;
	// dataRows.push(
	//     createData(team.team.id, team.team.name, team.gamesPlayed,
	//         team.leagueRecord.wins, team.leagueRecord.losses, team.leagueRecord.ot, team.points,
	//         team.pointsPercentage, team.regulationWins, team.row, team.goalsScored, team.goalsAgainst,
	//         team.goalsScored - team.goalsAgainst, team.streak.streakCode)
	//     );

	return (
		<TableRow hover={true} sx={rowStyle} key={team.team.name}>
			<TableCell
				onClick={() =>
					navigate(`/team/${team.team.id}`, {
						state: { streak: team.streak.streakCode },
					})
				}
				id={team.team.id}
				sx={{
					color: 'black',
					minWidth: 220,
					alignItems: 'center',
					justifyContent: 'center',
				}}
				component='th'
				scope='row'>
				{team.divisionRank} &nbsp;
				<Box
					component='img'
					sx={{
						maxHeight: 30,
						maxWidth: 'auto',
					}}
					alt='The house from the offer.'
					src={logoUrl}
				/>
				&nbsp;&nbsp;{team.team.name}
			</TableCell>
			<TableCell sx={cellStyle} align='center'>
				{team.gamesPlayed}
			</TableCell>
			<TableCell sx={cellStyle} align='center'>
				{team.leagueRecord.wins}
			</TableCell>
			<TableCell sx={cellStyle} align='center'>
				{team.leagueRecord.losses}
			</TableCell>
			<TableCell sx={cellStyle} align='center'>
				{team.leagueRecord.ot}
			</TableCell>
			<TableCell sx={[cellStyle, ptsCol]} align='center'>
				{team.points}
			</TableCell>
			<TableCell sx={cellStyle} align='center'>
				{team.pointsPercentage.toFixed(3)}
			</TableCell>
			<TableCell sx={cellStyle} align='center'>
				{team.regulationWins}
			</TableCell>
			<TableCell sx={cellStyle} align='center'>
				{team.row}
			</TableCell>
			<TableCell sx={cellStyle} align='center'>
				{team.goalsScored}
			</TableCell>
			<TableCell sx={cellStyle} align='center'>
				{team.goalsAgainst}
			</TableCell>
			<TableCell
				sx={cellStyle}
				align='center'
				className={`${
					goalDiff > 0 ? 'positive-diff' : goalDiff < 0 ? 'negative-diff' : ''
				}`}>
				{goalDiff}
			</TableCell>
			<TableCell sx={cellStyle} align='center'>
				{team.streak.streakCode}
			</TableCell>
		</TableRow>
	);
}
