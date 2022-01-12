import { Container, createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameDetailsPage from '../../features/game-details/GameDetailsPage';
import HomePage from '../../features/home/HomePage';
import ScoresPage from '../../features/scores/ScoresPage';
import SingleTeamInfoPage from '../../features/single team/SingleTeamInfoPage';
import StandingsPage from '../../features/standings/StandingsPage';
import StatsPage from '../../features/stats/StatsPage';
import Header from './Header';

function App() {

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Routes>
            <Route path='/scores' element={<ScoresPage />} />
            <Route path='/standings' element={<StandingsPage />} />
            <Route path='/stats' element={<StatsPage />} />
            <Route path='/scores/game/:gameId/boxscore' element={<GameDetailsPage />} />
            <Route path='/team/:teamId' element={<SingleTeamInfoPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
