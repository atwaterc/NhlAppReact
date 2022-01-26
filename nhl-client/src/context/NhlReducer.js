const standingsReducer = (state, action) => {
	switch (action.type) {
		case 'GET_STANDINGS':
			return {
				...state,
				standings: action.payload,
				loading: false,
			};
		case 'GET_SCORES':
			return {
				...state,
				scores: action.payload,
				loading: false,
			};
		case 'SET_LOADING':
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};

export default standingsReducer;
