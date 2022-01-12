import { AppBar, Avatar, List, ListItem, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../static/images/logo.svg';

const links = [
    {title: 'scores', path: '/scores'},
    {title: 'standings', path: '/standings'},
    {title: 'stats', path: '/stats'}
]

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'overline',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'primary.main'
    }
}

export default function Header() {
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Avatar
                        variant='square'
                        component={NavLink} 
                        to='/'
                        src={logo}
                    />
                    <List sx={{display: 'flex'}}>
                        {links.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
            </Toolbar>
        </AppBar>
    )
}