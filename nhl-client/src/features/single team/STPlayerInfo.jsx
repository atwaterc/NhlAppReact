import { Card, CardContent, CardMedia, Typography } from '@mui/material'

function STPlayerInfo() {
    return (
        <Card>
            <CardMedia 
                component="img"
                alt="player"
                image="https://nhl.bamcontent.com/images/headshots/current/168x168/8477974.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   John Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    stuff
                </Typography>
            </CardContent>
        </Card>
    )
}

export default STPlayerInfo
