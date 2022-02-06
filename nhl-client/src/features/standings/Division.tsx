import {
	TableContainer,
	Paper,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Table,
} from '@mui/material';
import Team from './Team';

interface Props {
	division: any;
}

export default function Division({ division }: Props) {
	return (
		<TableContainer component={Paper} sx={{ mt: 3, mb: 3 }}>
			<Table size='small' sx={{ minWidth: 700 }}>
				<TableHead>
					<TableRow>
						<TableCell sx={{ minWidth: 80 }}>
							{division.division.name}
						</TableCell>
						<TableCell align='center'>GP</TableCell>
						<TableCell align='center'>W</TableCell>
						<TableCell align='center'>L</TableCell>
						<TableCell align='center'>OT</TableCell>
						<TableCell align='center'>PTS</TableCell>
						<TableCell align='center'>P%</TableCell>
						<TableCell align='center'>RW</TableCell>
						<TableCell align='center'>ROW</TableCell>
						<TableCell align='center'>GF</TableCell>
						<TableCell align='center'>GA</TableCell>
						<TableCell align='center'>DIFF</TableCell>
						<TableCell align='center'>STRK</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{division.teamRecords.map((t: any, index: number) => (
						<Team key={index} team={t} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
