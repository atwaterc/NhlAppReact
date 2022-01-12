import { Box } from '@mui/material';
import ScoresData from './ScoresData';

const boxStyles = {
    mb: 4
}

interface Props {
    game: any;
}

export default function ScoresBox({ game }: Props) {
    return (
        <Box id={game.gamePk} sx={boxStyles}>
            <ScoresData teams={game.teams} venue={game.venue} gameId={game.gamePk} status={game.status}/>            
        </Box>

    )
}