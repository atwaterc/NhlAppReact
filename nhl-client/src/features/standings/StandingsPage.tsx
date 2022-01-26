import { useContext, useEffect } from 'react';
import { getStandings } from '../../context/standings/StandingsActions';
import StandingsContext from '../../context/standings/StandingsContext';
import Spinner from '../common/Spinner';
import Division from './Division';

export default function StandingsPage() {
	//const [standings, setStandings] = useState<any>({});

	const { standings, dispatch, loading } = useContext(StandingsContext);

	useEffect(() => {
		dispatch({ type: 'SET_LOADING' });
		document.title = 'NHL | Standings';
		const getStandingsData = async () => {
			const standingsData = await getStandings();
			dispatch({ type: 'GET_STANDINGS', payload: standingsData });
		};

		getStandingsData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <Spinner />;

	return (
		<>
			{standings.map((div: any) => (
				<Division key={div.division.name} division={div} />
			))}
		</>
	);
}
