import { createContext, useReducer } from 'react';
import nhlReducer from './NhlReducer';

const NhlContext = createContext();

export const NhlProvider = ({ children }) => {
	const initialState = {
		standings: [],
		scores: [],
		loading: false,
	};

	// dispatch an action to reducer
	const [state, dispatch] = useReducer(nhlReducer, initialState);

	return (
		<NhlContext.Provider value={{ ...state, dispatch }}>
			{children}
		</NhlContext.Provider>
	);
};

export default NhlContext;
