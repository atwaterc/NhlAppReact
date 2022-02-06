import axios from 'axios';

const NHL_URL = process.env.REACT_APP_NHL_URL;

//create base axios call
const nhlApi = axios.create({
	baseURL: NHL_URL,
});

export const getStandings = async () => {
	const response = await nhlApi.get('/standings');

	return response.data.records;
};

export const getScores = async () => {
	const response = await nhlApi.get('/schedule');
	if (response.data.dates === undefined || response.data.dates.length === 0) {
		return null;
	}
	return response.data.dates[0].games;
};
