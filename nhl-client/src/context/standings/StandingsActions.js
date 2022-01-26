import axios from 'axios';

const NHL_URL = process.env.REACT_APP_NHL_URL;
const LOGO_URL = process.env.REACT_APP_TEAM_LOGO_URL;

//create base axios call
const nhlApi = axios.create({
	baseURL: NHL_URL,
});

export const getStandings = async () => {
	const response = await nhlApi.get('/standings');

	return response.data.records;
};
