import { createContext, useReducer } from 'react';
import standingsReducer from './StandingsReducer';

const StandingsContext = createContext();

export const StandingsProvider = ({ children }) => {
	const initialState = {
		standings: [],
		loading: false,
	};

	// dispatch an action to reducer
	const [state, dispatch] = useReducer(standingsReducer, initialState);

	return (
		<StandingsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</StandingsContext.Provider>
	);
};

export default StandingsContext;
