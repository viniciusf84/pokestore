import axios from 'axios';

const DATA_URL = `https://pokeapi.co/api/v2/`;

function Api(uri) {
	return axios.get(`${DATA_URL}${uri}`);
}

export default Api;